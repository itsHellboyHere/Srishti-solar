'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Home',      href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Projects',  href: '/projects' },
  { label: 'Subsidies', href: '/subsidies' },
  { label: 'About',     href: '/about' },
]

const BROCHURE_URL = 'https://res.cloudinary.com/dgifa4wgb/image/upload/fl_attachment:Srishti_Solar_Power_Brochure/v1778914616/Srishti_Solar_Power_sqwvsd.pdf'

export default function Navbar() {
  const pathname  = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  /* Scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close on desktop resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1024) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const isHome = pathname === '/'

  return (
    <>
      {/* ── Navbar bar ── */}
      <nav
        className={`
          ${styles.navbar}
          ${isHome && scrolled ? styles.scrolled : ''}
          ${!isHome ? styles.scrolled : ''}
          ${menuOpen ? styles.menuActive : ''}
        `}
      >
        <div className={styles.container}>

          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <div className={styles.logoMark}>
              <Image
                src="/logo.png"
                alt="Srishti Solar"
                width={44}
                height={44}
                className={styles.logoImg}
                priority
              />
            </div>
            <div className={styles.logoText}>
              <span className={styles.brandName}>SRISHTI</span>
              <span className={styles.brandSub}>SOLAR POWER</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className={styles.navLinks}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label} className={styles.navItem}>
                <Link
                  href={href}
                  className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Brochure + Hamburger */}
          <div className={styles.actions}>
            <a
              href={BROCHURE_URL}
              download="Srishti_Solar_Power_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brochureBtn}
              aria-label="Download Brochure"
            >
              <svg className={styles.brochureIcon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10 2v10m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 14v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <span>Brochure</span>
            </a>
            <Link href="/contact" className={styles.ctaButton}>
              <span>Contact Us</span>
            </Link>
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>

        </div>
      </nav>

      {/*
        ── Mobile menu rendered OUTSIDE <nav> ──
        Moving it here escapes the stacking context that backdrop-filter
        + will-change creates on the navbar. This is the only structural
        change — all class names and styles are identical to your original.
      */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileVisible : ''}`}>
        <div className={styles.mobileLinks}>
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`${styles.mobileLink} ${pathname === href ? styles.mobileActive : ''}`}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}

          {/* Brochure download in mobile menu */}
          <a
            href={BROCHURE_URL}
            download="Srishti_Solar_Power_Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileBrochure}
            onClick={closeMenu}
          >
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M10 2v10m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 14v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            Download Brochure
          </a>

          <Link href="/contact" className={styles.mobileCta} onClick={closeMenu}>
            Start Your Solar Journey →
          </Link>
        </div>
      </div>
    </>
  )
}
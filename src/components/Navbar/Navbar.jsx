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
                width={42}
                height={42}
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

          {/* CTA + Hamburger */}
          <div className={styles.actions}>
            <Link href="/contact" className={styles.ctaButton}>
              <span>Get Free Quote</span>
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
          <Link href="/contact" className={styles.mobileCta} onClick={closeMenu}>
            Start Your Solar Journey →
          </Link>
        </div>
      </div>
    </>
  )
}
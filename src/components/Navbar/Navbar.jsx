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
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && menuOpen) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset'
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuActive : ''}`}>
      <div className={styles.container}>

        {/* ── Logo ── */}
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

        {/* ── Desktop Nav ── */}
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

        {/* ── Actions ── */}
        <div className={styles.actions}>
          <Link href="/contact" className={styles.ctaButton}>
            <span>Get Free Quote</span>
          </Link>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
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
    </nav>
  )
}
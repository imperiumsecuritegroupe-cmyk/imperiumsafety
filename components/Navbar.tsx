'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [secteursOpen, setSecteursOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setSecteursOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Navigation principale">
      <div className="navbar__inner">
        <Link href="/" className="navbar__logo" aria-label="Imperium Safety Security - Accueil" onClick={closeMenu}>
          <div className="navbar__logo-badge">I</div>
          <div className="navbar__logo-text">Imperium Safety<span>Security</span></div>
        </Link>
        <button
          className={`navbar__burger${menuOpen ? ' active' : ''}`}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
        <ul className={`navbar__menu${menuOpen ? ' open' : ''}`} role="list">
          <li>
            <Link href="/" className={isActive('/') && pathname === '/' ? 'active' : ''} onClick={closeMenu}>Accueil</Link>
          </li>
          <li>
            <Link href="/a-propos" className={isActive('/a-propos') ? 'active' : ''} onClick={closeMenu}>À Propos</Link>
          </li>
          <li className={`has-dropdown${servicesOpen ? ' open' : ''}`}>
            <Link href="/services" className={isActive('/services') ? 'active' : ''} onClick={(e) => { if (window.innerWidth <= 1024) { e.preventDefault(); setServicesOpen(!servicesOpen); } }}>
              Services <span className="dropdown-arrow">▾</span>
            </Link>
            <ul className="dropdown-menu" role="list">
              <li><Link href="/services/surete-aeroportuaire" onClick={closeMenu}>Sûreté Aéroportuaire</Link></li>
              <li><Link href="/services/surete-portuaire" onClick={closeMenu}>Sûreté Portuaire</Link></li>
              <li><Link href="/services/inspection-filtrage" onClick={closeMenu}>Inspection-Filtrage</Link></li>
              <li><Link href="/services/cynophilie" onClick={closeMenu}>Cynophilie</Link></li>
              <li><Link href="/services/evenementiel" onClick={closeMenu}>Sûreté Événementielle</Link></li>
            </ul>
          </li>
          <li className={`has-dropdown${secteursOpen ? ' open' : ''}`}>
            <Link href="/secteurs" className={isActive('/secteurs') ? 'active' : ''} onClick={(e) => { if (window.innerWidth <= 1024) { e.preventDefault(); setSecteursOpen(!secteursOpen); } }}>
              Secteurs <span className="dropdown-arrow">▾</span>
            </Link>
            <ul className="dropdown-menu" role="list">
              <li><Link href="/secteurs/france-metropolitaine" onClick={closeMenu}>France Métropolitaine</Link></li>
              <li><Link href="/secteurs/dom-tom" onClick={closeMenu}>Outre-Mer &amp; DOM-TOM</Link></li>
            </ul>
          </li>
          <li>
            <Link href="/formations" className={isActive('/formations') ? 'active' : ''} onClick={closeMenu}>Formations</Link>
          </li>
          <li>
            <Link href="/recrutement" className={isActive('/recrutement') ? 'active' : ''} onClick={closeMenu}>Recrutement</Link>
          </li>
          <li>
            <Link href="/contact" className="btn-cta" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

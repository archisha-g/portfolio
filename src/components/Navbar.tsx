import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1,
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        {/* Brand */}
        <a href="#" className="nav-brand" aria-label="Archisha Ghanshani Home">
          <span className="brand-monogram">AG</span>
          <span className="brand-name">ARCHISHA GHANSHANI</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          <ul className="nav-list">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {link.label}
                    {isActive && <span className="nav-active-dot" aria-hidden="true" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="nav-actions">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Actions */}
        <div className="nav-mobile-controls">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="container mobile-drawer-inner">
          <ul className="mobile-nav-list">
            {NAV_LINKS.map((link, idx) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  >
                    <span className="mobile-link-num">0{idx + 1}</span>
                    <span className="mobile-link-text">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <p className="mobile-drawer-note font-mono">
              Computer Science &amp; AI • Meerut, India
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

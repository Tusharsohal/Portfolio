import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';

const sectionBgMap = {
  hero: 'dark',
  about: 'light',
  projects: 'light',
  skills: 'dark',
  contact: 'olive',
};

function Navbar() {
  const [isMenuOpen,     setIsMenuOpen]     = useState(false);
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [activeSection,  setActiveSection]  = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [bgMode,         setBgMode]         = useState('dark'); // dark | light | olive
  const navRef  = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const docH    = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(docH > 0 ? (scrollY / docH) * 100 : 0);
        setIsScrolled(scrollY > 60);

        const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
        let current = 'hero';
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollY + 120) { current = sections[i]; break; }
        }
        setActiveSection(current);
        setBgMode(sectionBgMap[current] || 'dark');
        ticking.current = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'about',    label: 'About',    num: '01' },
    { id: 'projects', label: 'Projects', num: '02' },
    { id: 'skills',   label: 'Skills',   num: '03' },
    { id: 'contact',  label: 'Contact',  num: '04' },
  ];

  return (
    <>
      {/* ── Scroll progress bar ── */}
      <div className="nb-progress" aria-hidden="true">
        <div className="nb-progress-fill" style={{ width: `${scrollProgress}%` }} />
      </div>

      <nav
        ref={navRef}
        className={`nb-root nb-root--${bgMode} ${isScrolled ? 'nb-root--scrolled' : ''}`}
        aria-label="Main navigation"
      >
        <div className="nb-inner">

          {/* ── LOGO ── */}
          <a
            href="#hero"
            className="nb-logo"
            onClick={e => scrollTo(e, 'hero')}
            aria-label="Back to top"
          >
            {/* Monogram box */}
            <div className="nb-monogram">
              <span className="nb-mono-t">T</span>
              <span className="nb-mono-dot" aria-hidden="true" />
              <span className="nb-mono-s">S</span>
            </div>
            {/* Name + role stack */}
            <div className="nb-logo-text">
              <span className="nb-logo-name">Tushar Sohal</span>
              <span className="nb-logo-role">Backend Developer</span>
            </div>
          </a>

          {/* ── DESKTOP NAV LINKS ── */}
          <ul className="nb-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nb-link ${activeSection === item.id ? 'nb-link--active' : ''}`}
                  onClick={e => scrollTo(e, item.id)}
                >
                  <span className="nb-link-num">{item.num}</span>
                  <span className="nb-link-label">{item.label}</span>
                  <span className="nb-link-bar" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          {/* ── CTA ── */}
          <a
            href="mailto:tusharsohal20@gmail.com"
            className="nb-cta"
            aria-label="Hire Tushar"
          >
            <span className="nb-cta-fill" aria-hidden="true" />
            <span className="nb-cta-inner">
              <span className="nb-cta-pulse" aria-hidden="true" />
              <span className="nb-cta-text">Hire Me</span>
            </span>
          </a>

          {/* ── HAMBURGER ── */}
          <button
            className={`nb-toggle ${isMenuOpen ? 'nb-toggle--open' : ''}`}
            onClick={() => setIsMenuOpen(o => !o)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="nb-drawer"
          >
            <span className="nb-bar nb-bar--1" />
            <span className="nb-bar nb-bar--2" />
          </button>

        </div>

        {/* Bottom hairline — fills from left as you scroll */}
        <div className="nb-hairline" aria-hidden="true">
          <div className="nb-hairline-fill" style={{ width: `${scrollProgress}%` }} />
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div
        id="nb-drawer"
        className={`nb-drawer ${isMenuOpen ? 'nb-drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!isMenuOpen}
      >
        <div className="nb-drawer-noise" aria-hidden="true" />

        {/* Drawer header */}
        <div className="nb-drawer-head">
          <div className="nb-drawer-mono">
            <span>T</span><span className="nb-drawer-dot" /><span>S</span>
          </div>
          <button
            className="nb-drawer-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="nb-close-l nb-close-l--1" />
            <span className="nb-close-l nb-close-l--2" />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="nb-drawer-body" aria-label="Mobile navigation">
          {navItems.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nb-dl ${activeSection === item.id ? 'nb-dl--active' : ''}`}
              style={{ transitionDelay: isMenuOpen ? `${i * 60 + 60}ms` : '0ms' }}
              onClick={e => scrollTo(e, item.id)}
            >
              <span className="nb-dl-num">{item.num}</span>
              <span className="nb-dl-label">{item.label}</span>
              <span className="nb-dl-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="nb-drawer-foot">
          <a
            href="mailto:tusharsohal20@gmail.com"
            className="nb-drawer-cta"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="nb-drawer-cta-fill" aria-hidden="true" />
            <span className="nb-drawer-cta-text">Get in Touch</span>
          </a>
          <p className="nb-drawer-tag">New Delhi · Open to Work</p>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="nb-backdrop"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Navbar;

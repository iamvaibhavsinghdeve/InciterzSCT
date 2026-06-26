import { useEffect, useState } from 'react';

export default function Navbar({ onBurgerClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about-us', label: 'About Us' },
    { href: '#directors', label: 'Directors' },
    { href: '#core-values', label: 'Our Core Values' },
    { href: '#our-work', label: 'Our Work' },
    { href: '#our-impact', label: 'Our Impact' },
    { href: '#media', label: 'Media & News' },
    { href: '#contact-us', label: 'Contact Us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // scroll-spy
      let cur = '#home';
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el && el.getBoundingClientRect().top <= 140) cur = link.href;
      }
      setActiveLink(cur);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="hdr" className={scrolled ? 'scrolled' : ''}>
      <div className="container nav">
        <a href="#home" className="logo">
          <img src="/logo.png" alt="Inciterz Political Consulting" className="logo-img" />
        </a>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeLink === link.href ? 'active' : ''}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button className="burger" id="burger" aria-label="Menu" onClick={onBurgerClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

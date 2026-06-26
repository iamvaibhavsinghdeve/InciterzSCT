export default function MobileMenu({ isOpen, onClose }) {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about-us', label: 'About Us' },
    { href: '#directors', label: 'Directors' },
    { href: '#core-values', label: 'Our Core Values' },
    { href: '#our-work', label: 'Our Work' },
    { href: '#our-impact', label: 'Our Impact' },
    { href: '#media', label: 'Media & News' },
    { href: '#contact-us', label: 'Contact Us' },
  ];

  return (
    <div className={`mobile-menu${isOpen ? ' open' : ''}`} id="mmenu">
      {links.map((link) => (
        <a key={link.href} href={link.href} onClick={onClose}>
          {link.label}
        </a>
      ))}
    </div>
  );
}

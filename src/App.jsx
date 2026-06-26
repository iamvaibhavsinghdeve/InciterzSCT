import { useState, useEffect } from 'react';
import './styles/preview.css';

import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import KeyPoints from './components/KeyPoints';
import About from './components/About';
import Impact from './components/Impact';
import Founder from './components/Founder';
import OurWork from './components/OurWork';
import Media from './components/Media';
import CoreValues from './components/CoreValues';
import Contact from './components/Contact';
import Social from './components/Social';
import Footer from './components/Footer';

import DirectorsPage from './components/DirectorsPage';
import WorkDetailPage from './components/WorkDetailPage';
import ImpactDetailPage from './components/ImpactDetailPage';
import MediaDetailPage from './components/MediaDetailPage';

import useScrollReveal from './hooks/useScrollReveal';

// ─── hash router ────────────────────────────────────────────────────────────
// page values: 'home' | 'directors' | 'works' | 'media' | 'impact'
function getPageFromHash(hash) {
  if (hash === '#/directors') return { page: 'directors', impactIdx: 0 };
  if (hash === '#/works') return { page: 'works', impactIdx: 0 };
  if (hash === '#/media') return { page: 'media', impactIdx: 0 };
  const mi = hash.match(/^#\/impacts\/(\d+)/);
  if (mi) return { page: 'impact', impactIdx: parseInt(mi[1], 10) };
  return { page: 'home', impactIdx: 0 };
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [{ page, impactIdx }, setRoute] = useState(() =>
    getPageFromHash(window.location.hash)
  );

  // listen for hash changes (covers browser back/forward + anchor clicks)
  useEffect(() => {
    const onHash = () => {
      const r = getPageFromHash(window.location.hash);
      setRoute(r);
      if (r.page === 'home') {
        const hash = window.location.hash;
        if (hash && hash.length > 1 && !hash.startsWith('#/')) {
          requestAnimationFrame(() => {
            const target = document.querySelector(hash);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // scroll reveal — re-observe whenever the active page changes
  useScrollReveal(page);

  const navigate = (target) => {
    window.location.hash = '#/' + target;
  };

  const goHome = () => {
    window.location.hash = '#home';
  };

  const isHome = page === 'home';

  return (
    <>
      <Navbar onBurgerClick={() => setMenuOpen((o) => !o)} />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* ── HOME PAGE ── */}
      <div id="home-page" style={{ display: isHome ? '' : 'none' }}>
        <Hero />
        <KeyPoints />
        <About />
        <Impact onImpactCardClick={(idx) => { window.location.hash = '#/impacts/' + idx; }} />
        <Founder onReadMore={navigate} />
        <OurWork onWorkCardClick={() => { window.location.hash = '#/works'; }} />
        <Media onMediaCardClick={() => { window.location.hash = '#/media'; }} />
        <CoreValues />
        <Contact />
        <Social />
      </div>

      {/* ── SUBPAGES ── */}
      {page === 'directors' && <DirectorsPage onBack={goHome} />}
      {page === 'works' && <WorkDetailPage onBack={goHome} />}
      {page === 'media' && <MediaDetailPage onBack={goHome} />}
      {page === 'impact' && <ImpactDetailPage initialIndex={impactIdx} onBack={goHome} />}

      <Footer />
    </>
  );
}

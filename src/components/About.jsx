import { useEffect, useRef } from 'react';

const INSTITUTIONS = [
  'Institution 1', 'Institution 2', 'Institution 3', 'Institution 4',
  'Institution 5', 'Institution 6', 'Institution 7', 'Institution 8',
];

export default function About() {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Build logos
    const logos = INSTITUTIONS.map(
      (name) =>
        `<div class="al-logo"><span class="lm">&#9733;</span><b>${name}</b></div>`
    ).join('');
    track.innerHTML = logos + logos; // duplicate for seamless loop

    const speed = 0.5;
    const tick = () => {
      if (!pausedRef.current) {
        track.scrollLeft += speed;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft -= track.scrollWidth / 2;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const pause = () => { pausedRef.current = true; };
    const resume = () => { pausedRef.current = false; };

    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);
    track.addEventListener('touchstart', pause, { passive: true });

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
      track.removeEventListener('touchstart', pause);
    };
  }, []);

  const scrollPrev = () => {
    trackRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };
  const scrollNext = () => {
    trackRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <section className="about" id="about-us">
      <div className="abt-orb"></div>
      <div className="container">
        <div className="about-grid">

          <div className="about-txt reveal">
            <div className="welcome">Welcome to Inciterz</div>
            <div className="sub">5 years of relentless passion, fierce teamwork, and success.</div>
            <p>
              We're not just another consultancy. We're a movement. A powerhouse of India's most
              innovative minds, transforming political campaigns from good to extraordinary with
              research, data, and strategic brilliance. We tackle both immediate and long-term
              challenges, shaping narratives and designing campaigns that win elections and drive
              lasting change.
            </p>
            <p className="ready">Are you ready to win? ...</p>
          </div>

          <div className="photos reveal d1">
            <div className="dots-tl"></div>
            <div className="pgrid">
              <div className="pi a" data-l="Team photo"></div>
              <div className="pi b" data-l="Event"></div>
              <div className="pi c" data-l="Celebration"></div>
              <div className="pi d" data-l="War room"></div>
            </div>
          </div>

        </div>

        <div className="alumni reveal">
          <div className="atitle">Talented minds from these institutions are part of our team</div>
          <div className="alumni-row">
            <button className="al-arrow" aria-label="Previous" onClick={scrollPrev}>&#8249;</button>
            <div className="al-track" id="alTrack" ref={trackRef}></div>
            <button className="al-arrow" aria-label="Next" onClick={scrollNext}>&#8250;</button>
            <a href="#contact-us" className="join-btn">Join us</a>
          </div>
        </div>

      </div>
    </section>
  );
}

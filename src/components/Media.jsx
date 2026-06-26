import { useEffect, useRef } from 'react';

const CARDS = [
  { date: '[ date ]', headline: '[ Your press headline goes here \u2026 ]' },
  { date: '[ date ]', headline: '[ Your press headline goes here \u2026 ]' },
  { date: '[ date ]', headline: '[ Your press headline goes here \u2026 ]' },
  { date: '[ date ]', headline: '[ Your press headline goes here \u2026 ]' },
  { date: '[ date ]', headline: '[ Your press headline goes here \u2026 ]' },
  { date: '[ date ]', headline: '[ Your press headline goes here \u2026 ]' },
];

export default function Media({ onMediaCardClick }) {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.55;
    const getStep = () => {
      const c = track.querySelector('.media-card');
      return c ? c.getBoundingClientRect().width + 26 : 300;
    };

    // duplicate for seamless loop
    track.innerHTML += track.innerHTML;

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
    const track = trackRef.current;
    if (!track) return;
    const c = track.querySelector('.media-card');
    const step = c ? c.getBoundingClientRect().width + 26 : 300;
    track.scrollBy({ left: -step, behavior: 'smooth' });
  };

  const scrollNext = () => {
    const track = trackRef.current;
    if (!track) return;
    const c = track.querySelector('.media-card');
    const step = c ? c.getBoundingClientRect().width + 26 : 300;
    track.scrollBy({ left: step, behavior: 'smooth' });
  };

  return (
    <section className="media" id="media">
      <div className="dots-tl"></div>
      <div className="dots-r"></div>
      <div className="container">

        <div className="media-head reveal">Our Media</div>

        <div className="media-slider reveal d1">
          <button className="ms-arrow" aria-label="Previous" onClick={scrollPrev}>&#8249;</button>

          <div className="ms-track" id="msTrack" ref={trackRef}>
            {CARDS.map((card, i) => (
              <div
                key={i}
                className="media-card"
                onClick={() => onMediaCardClick && onMediaCardClick()}
              >
                <div className="img" data-l="[ Press image ]"></div>
                <div className="info">
                  <span className="date">{card.date}</span>
                  <h4>{card.headline}</h4>
                </div>
              </div>
            ))}
          </div>

          <button className="ms-arrow" aria-label="Next" onClick={scrollNext}>&#8250;</button>
        </div>

      </div>
    </section>
  );
}

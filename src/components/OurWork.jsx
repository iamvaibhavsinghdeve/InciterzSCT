const FlagIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="34"
    height="34"
    fill="none"
    stroke="#1c6cab"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 21V4" />
    <path d="M5 4.5h11l-2 3 2 3H5" />
  </svg>
);

export default function OurWork({ onWorkCardClick }) {
  const cards = [
    { state: '[ State ]', year: '[ Year ]', leader: '[ Leader name ]' },
    { state: '[ State ]', year: '[ Year ]', leader: '[ Leader name ]' },
    { state: '[ State ]', year: '[ Year ]', leader: '[ Leader name ]' },
  ];

  return (
    <section className="work" id="our-work">
      <div className="dots-tr"></div>
      <div className="container">

        <div className="work-head reveal">Our Work</div>

        <div className="work-intro reveal d1">
          <p>
            From <b>building wildly successful organizations</b> to{' '}
            <b>driving large-scale campaigns</b> in the most challenging environments, we&rsquo;ve
            been on a roll. Our work spans diverse political landscapes across the country -; from
            dense urban battlegrounds to the most remote constituencies.
          </p>
          <p>
            But it&rsquo;s not just about geography; it&rsquo;s about the depth of the impact.
            We&rsquo;ve solved <b>highly complex problems</b>, navigated{' '}
            <b>dynamic political landscapes</b>, and delivered <b>game-changing results</b>. No
            challenge is too big, no problem too complex.
          </p>
        </div>

        <div className="wk-grid reveal d2">
          {cards.map((card, i) => (
            <div
              key={i}
              className="wk-card"
              onClick={() => onWorkCardClick && onWorkCardClick()}
            >
              <div className="wk-top">
                <div className="wk-logo">
                  <FlagIcon />
                </div>
                <div className="wk-meta">
                  <div className="wk-state">{card.state}</div>
                  <div className="wk-year">{card.year}</div>
                </div>
              </div>
              <div className="wk-photo" data-l="[ Leader photo ]"></div>
              <div className="wk-name">{card.leader}</div>
              <div className="wk-arrow">&#8250;</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

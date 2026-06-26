import { useState } from 'react';

const REGIONS = ['[ Region 1 ]', '[ Region 2 ]', '[ Region 3 ]'];

export default function ImpactDetailPage({ initialIndex = 0, onBack }) {
  const [activeIdx, setActiveIdx] = useState(initialIndex);

  return (
    <div id="page-impact" className="subpage active">
      <section className="sec">
        <div className="container">
          <a className="back-link" href="#home" onClick={(e) => { e.preventDefault(); onBack && onBack(); }}>
            &#8592; Back to home
          </a>

          <div className="work-tabs" id="impTabs">
            {REGIONS.map((region, i) => (
              <button
                key={i}
                className={`wt${activeIdx === i ? ' active' : ''}`}
                data-idx={i}
                onClick={() => setActiveIdx(i)}
              >
                {region}
              </button>
            ))}
          </div>

          <h2 className="wd-title" id="impTitle">
            {REGIONS[activeIdx]} &#8212; Our Impact
          </h2>

          <div className="impact-video" data-l="[ Impact video ]">
            <div className="play"></div>
          </div>

          <h3 className="wd-sub">Initiatives &amp; outcomes</h3>
          <ul className="imp-list">
            {[1, 2, 3, 4, 5].map((n) => (
              <li key={n}>
                <h4>[ Impact area ]</h4>
                <p>
                  [ Describe the outcome -; who benefited, the scale, and the change delivered on
                  the ground. Replace with Inciterz's real impact. ]
                </p>
              </li>
            ))}
          </ul>

        </div>
      </section>
    </div>
  );
}

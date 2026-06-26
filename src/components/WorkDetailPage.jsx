import { useState } from 'react';

const CAMPAIGNS = ['[ Campaign 1 ]', '[ Campaign 2 ]', '[ Campaign 3 ]'];

export default function WorkDetailPage({ onBack }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div id="page-works" className="subpage active">
      <section className="sec">
        <div className="container">
          <a className="back-link" href="#home" onClick={(e) => { e.preventDefault(); onBack && onBack(); }}>
            &#8592; Back to home
          </a>

          <div className="work-tabs">
            {CAMPAIGNS.map((c, i) => (
              <button
                key={i}
                className={`wt${activeTab === i ? ' active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {c}
              </button>
            ))}
          </div>

          <h2 className="wd-title">[ State ] [ Year ] -; [ Campaign Title ]</h2>
          <p className="wd-intro">
            [ Open with the context and the challenge, then your strategy and the outcome -; for
            example, how you repositioned the client, the seat gains delivered, and what drove the
            result. Replace with Inciterz's real case study. ]
          </p>

          <h3 className="wd-sub">Initiatives that made a difference</h3>

          {[1, 2, 3].map((n) => (
            <div className="init-block" key={n}>
              <div className="init-gallery">
                <div className="ig" data-l="[ image ]"></div>
                <div className="ig" data-l="[ image ]"></div>
                <div className="ig" data-l="[ image ]"></div>
              </div>
              <h4>[ Initiative name ]</h4>
              <p>
                [ Describe the initiative -; what it was, who it reached, and the impact it created
                on the ground. ]
              </p>
            </div>
          ))}

          <h3 className="wd-sub">Major Campaigns</h3>
          <ul className="wd-list">
            <li>
              <b>[ Campaign name ]:</b>{' '}
              [ a one-line description of the campaign and its objective. ]
            </li>
            <li>
              <b>[ Campaign name ]:</b>{' '}
              [ a one-line description of the campaign and its objective. ]
            </li>
            <li>
              <b>[ Campaign name ]:</b>{' '}
              [ a one-line description of the campaign and its objective. ]
            </li>
          </ul>

        </div>
      </section>
    </div>
  );
}

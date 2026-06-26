export default function Impact({ onImpactCardClick }) {
  return (
    <section className="impact" id="our-impact">
      <div className="container">

        <div className="impact-head reveal">
          <svg viewBox="0 0 24 24">
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3.2" />
          </svg>
          <h2>Our Impact</h2>
        </div>

        <ul className="impact-bullets reveal d1">
          <li>
            <b>We Get It. Politics is dynamic.</b> Fast-paced. Ever-changing. We're right there with
            you, evolving strategies in real-time.
          </li>
          <li>
            <b>We're Wired for Innovation.</b> The future of politics is tech data-driven, and we're
            leading the charge. If you're not thinking about data, you're falling behind.
          </li>
          <li>
            <b>Results, Not Just Rhetoric.</b> Our focus is simple: deliver success. Winning
            campaigns, stronger narratives, and long-term impact.
          </li>
        </ul>

        <div className="ic-grid">

          <div
            className="icard2 c-mh reveal"
            onClick={() => onImpactCardClick && onImpactCardClick(0)}
          >
            <div className="state">[ State name ]</div>
            <svg className="map" viewBox="0 0 200 120" fill="#e89b3e">
              <path d="M20,42 L52,20 L92,30 L122,16 L162,32 L186,58 L168,88 L128,102 L92,92 L58,106 L30,82 Z" />
            </svg>
            <div className="party">PARTY</div>
            <div className="stats">
              <div className="stat-box">
                <div className="badge">&#8377;</div>
                <div>
                  <div className="big">0.00 Cr</div>
                  <div className="desc">
                    Beneficiaries under the <b>[ scheme name ]</b>.
                  </div>
                </div>
              </div>
              <div className="stat-box">
                <div className="badge">&#8377;</div>
                <div>
                  <div className="big">00,000</div>
                  <div className="desc">
                    Cash benefit <b>directly transferred</b> to beneficiary accounts.
                  </div>
                </div>
              </div>
            </div>
            <div className="photo" data-l="[ campaign photo ]"></div>
          </div>

          <div
            className="icard2 c-ap reveal d1"
            onClick={() => onImpactCardClick && onImpactCardClick(1)}
          >
            <div className="state">[ State name ]</div>
            <svg className="map" viewBox="0 0 200 120" fill="#d98b8b">
              <path d="M30,30 L70,18 L100,26 L130,16 L168,34 L182,64 L160,96 L120,104 L86,94 L54,104 L28,72 Z" />
            </svg>
            <div className="party">PARTY</div>
            <div className="stats">
              <div className="stat-box">
                <div className="badge">&#8377;</div>
                <div>
                  <div className="big">00 Lakh</div>
                  <div className="desc">
                    Beneficiaries received <b>[ benefit ]</b> under the <b>[ scheme ]</b>.
                  </div>
                </div>
              </div>
              <div className="stat-box">
                <div className="badge">&#8377;</div>
                <div>
                  <div className="big">00 Lakh</div>
                  <div className="desc">
                    Beneficiaries benefited from the <b>[ scheme ]</b>.
                  </div>
                </div>
              </div>
            </div>
            <div className="photo" data-l="[ campaign photo ]"></div>
          </div>

          <div
            className="icard2 c-ml reveal d2"
            onClick={() => onImpactCardClick && onImpactCardClick(2)}
          >
            <div className="state">[ State name ]</div>
            <svg className="map" viewBox="0 0 200 120" fill="#e6c83a">
              <path d="M22,48 L60,26 L96,34 L126,22 L166,36 L188,60 L170,84 L132,98 L96,90 L60,100 L30,80 Z" />
            </svg>
            <div className="party">PARTY</div>
            <div className="stats">
              <div className="stat-box">
                <div className="badge">&#8377;</div>
                <div>
                  <div className="big">0 Lakh</div>
                  <div className="desc">
                    Families received <b>[ amount ]</b> per household under <b>[ scheme ]</b>.
                  </div>
                </div>
              </div>
              <div className="stat-box">
                <div className="badge">&#9998;</div>
                <div>
                  <div className="big">00,000</div>
                  <div className="desc">
                    People's grievances resolved through <b>[ programme ]</b>.
                  </div>
                </div>
              </div>
            </div>
            <div className="photo" data-l="[ campaign photo ]"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

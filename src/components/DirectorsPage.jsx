export default function DirectorsPage({ onBack }) {
  return (
    <div id="page-directors" className="subpage active">
      <section className="founder sec">
        <div className="container">
          <a className="back-link" href="#home" onClick={(e) => { e.preventDefault(); onBack && onBack(); }}>
            &#8592; Back to home
          </a>

          <div className="founder-grid">
            <div className="founder-txt">
              <div className="dots-tl"></div>
              <div className="founder-head">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
                  <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
                  <path d="M3 12.5h18" />
                </svg>
                <h2>Founder &amp; Co-Founders</h2>
              </div>
              <span className="tag-note">&#8635; Replace with Inciterz's founder's real bio</span>
              <p>
                <b>[ Founder Name ]</b> is a trailblazer in the field of political strategy, with
                over a decade of turning bold ideas into winning campaigns. Their journey began with
                a simple conviction -; that disciplined data and sharp execution could reshape how
                elections are fought and won.
              </p>
              <p>
                An early innovator in the space, they have built and led organizations at the
                forefront of <b>political technology</b>, pioneering tools and methods that bring
                rigor, transparency, and measurable accountability to public life.
              </p>
              <p>
                Having advised leaders and parties across the country, their expertise spans the
                full arc of a modern campaign -; from <b>research and narrative</b> to{' '}
                <b>ground operations and the war room</b>.
              </p>
              <p>
                In <b>[ year ]</b>, they founded <b>Inciterz</b>, which has rapidly grown into
                one of the most trusted names in political consulting -; built on a single promise:{' '}
                <b>results, not rhetoric</b>.
              </p>
            </div>

            <div className="founder-photo">
              <div className="frame" data-l="[ Founder photo ]"></div>
              <div className="dots-br"></div>
            </div>
          </div>

          <div className="dir-section">
            <h2 className="dir-title">Directors &amp; Co-Founders</h2>
            <p className="dir-intro">
              Together, our directors bring decades of combined experience across diverse states and
              geographies -; turning challenges into opportunities and running every campaign with an
              uncompromising goal.{' '}
              <b>[ Replace with Inciterz's real directors. ]</b>
            </p>
            <div className="dir-grid">
              <div className="dir-card">
                <div className="dir-photo" data-l="[ Photo ]"></div>
                <div className="dir-body">
                  <h3>[ Director Name ]</h3>
                  <p>
                    [ A short professional bio -; background, education, expertise, and the
                    campaigns this director has led. Replace with real details. ]
                  </p>
                </div>
              </div>
              <div className="dir-card">
                <div className="dir-photo" data-l="[ Photo ]"></div>
                <div className="dir-body">
                  <h3>[ Director Name ]</h3>
                  <p>
                    [ A short professional bio -; background, education, expertise, and the
                    campaigns this director has led. Replace with real details. ]
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

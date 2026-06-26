export default function Social() {
  return (
    <section className="social">
      <div className="container">
        <div className="social-head reveal">Connect With Us</div>
        <div className="social-grid">

          <div className="scard reveal">
            <div className="shead">
              <div className="ava">f</div>
              <div>
                <b>Inciterz</b>
                <span>Facebook Page</span>
              </div>
            </div>
            <div className="sbody" data-l="[ Facebook page feed embeds here ]"></div>
          </div>

          <div className="scard reveal d1">
            <div className="shead">
              <div className="ava">IG</div>
              <div>
                <b>weinciterz</b>
                <span>Instagram</span>
              </div>
            </div>
            <div className="sbody" data-l="[ Instagram feed embeds here ]"></div>
          </div>

          <div className="scard yt reveal d2">
            <div className="shead">
              <div className="ava">YT</div>
              <div>
                <b>Inciterz</b>
                <span>YouTube</span>
              </div>
            </div>
            <div className="sbody" data-l="[ YouTube video embeds here ]">
              <div className="play"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

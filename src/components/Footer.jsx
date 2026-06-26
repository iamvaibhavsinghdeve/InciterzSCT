export default function Footer() {
  return (
    <footer>
      <div className="topbar"></div>
      <div className="fmain">
        <div className="container">
          <div className="fgrid">

            <div>
              <a href="#home" className="logo">
                <img
                  src="/logo.png"
                  alt="Inciterz Political Consulting"
                  className="logo-img logo-img--footer"
                />
              </a>
              <div className="socials">
                <a href="#" title="Facebook">f</a>
                <a href="#" title="YouTube">&#9654;</a>
                <a href="#" title="Instagram">IG</a>
                <a href="#" title="X">&#120143;</a>
              </div>
            </div>

            <div className="fcol">
              <h5>Explore</h5>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about-us">About us</a></li>
                <li><a href="#directors">Directors</a></li>
                <li><a href="#core-values">Our core values</a></li>
              </ul>
            </div>

            <div className="fcol">
              <h5>Useful Links</h5>
              <ul>
                <li><a href="#our-work">Our work</a></li>
                <li><a href="#our-impact">Our impact</a></li>
                <li><a href="#media">Media &amp; News</a></li>
                <li><a href="#contact-us">Contact us</a></li>
              </ul>
            </div>

            <div className="fcol">
              <h5>Contact</h5>
              <div className="cl">
                <svg viewBox="0 0 24 24">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>3rd Floor, H 146-147, Sector 63, Noida, Gautam Buddha Nagar, U.P., India</span>
              </div>
              <div className="cl">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <span>
                  <a href="mailto:connect@inciterz.com">connect@inciterz.com</a>
                </span>
              </div>
              <div className="cl">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
                </svg>
                <span>+91 9810200568</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="fbottom">Copyright 2026 by Inciterz. All Rights Reserved.</div>
    </footer>
  );
}

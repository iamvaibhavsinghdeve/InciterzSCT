import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section className="sec" id="contact-us">
      <div className="container">
        <div style={{ marginBottom: '40px' }}>
          <span className="eyebrow reveal">Contact us</span>
          <h2 className="h-sec reveal">Let&rsquo;s start a conversation.</h2>
        </div>
        <div className="contact-grid">

          <div className="cform reveal">
            <div className="row">
              <div className="field">
                <label>Name</label>
                <input placeholder="Your name" />
              </div>
              <div className="field">
                <label>Phone</label>
                <input placeholder="+91 &hellip;" />
              </div>
            </div>
            <div className="field">
              <label>Email</label>
              <input placeholder="you@example.com" />
            </div>
            <div className="field">
              <label>Message</label>
              <textarea rows="4" placeholder="Tell us about your campaign&hellip;"></textarea>
            </div>
            <button className="submit-btn" id="submitBtn" onClick={handleSubmit}>
              {submitted ? 'Sent \u2713' : 'Submit \u2192'}
            </button>
            {submitted && (
              <div className="ok" id="okMsg" style={{ display: 'block' }}>
                &#10003; Thanks! We&rsquo;ll be in touch shortly.
              </div>
            )}
          </div>

          <div className="cinfo reveal d1">
            <div className="cline">
              <span className="ic">&#9993;</span>
              <div>
                <b>Email</b>
                <span>
                  <a href="mailto:connect@inciterz.com">connect@inciterz.com</a>
                </span>
              </div>
            </div>
            <div className="cline">
              <span className="ic">&#9742;</span>
              <div>
                <b>Phone</b>
                <span>
                  Sales: +91 9810200568 &nbsp;&middot;&nbsp; Careers: +91 8527318585
                </span>
              </div>
            </div>
            <div className="cline">
              <span className="ic">&#9678;</span>
              <div>
                <b>Office</b>
                <span>
                  3rd Floor, H 146-147, Sector 63, Noida, Gautam Buddha Nagar, U.P., India
                </span>
              </div>
            </div>
            <div className="map"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

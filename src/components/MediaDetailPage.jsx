export default function MediaDetailPage({ onBack }) {
  return (
    <div id="page-media" className="subpage active">
      <article className="sec">
        <div className="container article">
          <a className="back-link" href="#home" onClick={(e) => { e.preventDefault(); onBack && onBack(); }}>
            &#8592; Back to home
          </a>

          <div className="article-img" data-l="[ Featured image ]"></div>
          <h1 className="article-title">[ Article headline goes here ]</h1>
          <div className="article-meta">[ date ] &middot; [ Publication ]</div>
          <p className="article-body">
            [ Open the article with the key point or a quote about Inciterz's work. Replace this
            with the real excerpt or summary of the coverage. ]
          </p>
          <p className="article-body">
            [ Continue with supporting detail -; what the piece said, who was quoted, and why it
            matters for Inciterz. ]
          </p>
          <a className="join-btn" href="#" target="_blank" rel="noopener">
            Read full article &#8594;
          </a>
        </div>
      </article>
    </div>
  );
}

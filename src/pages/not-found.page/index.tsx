import "./not-found.scss";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  // Don't forget to update in css.
  const galaxySize = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <>
      <main className="not-found-page-container">
        {galaxySize.map((i, index) => (
          <span key={index + Math.random()} className="particle">
            4
          </span>
        ))}
        {galaxySize.map((i, index) => (
          <span key={index + Math.random()} className="particle">
            0
          </span>
        ))}
        <article className="content rounded-1">
          <p className="text-start fs-1 text-primary fw-medium">Hmm.</p>
          <p>
            It seems that you're lost in a <strong>404</strong> galaxy.
          </p>
          <p>Let me help guide you out and get back to home.</p>
          <p className="text-center">
            <Link to="/">
              <button>Go back to home.</button>
            </Link>
          </p>
        </article>
      </main>
    </>
  );
}

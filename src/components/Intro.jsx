import Portrait from './Portrait';
import { IconOut } from '../icons';

export default function Intro() {
  return (
    <section className="intro" id="top">
      <div className="wrap intro-grid">
        <div>

          <h2 className="bigname">
            <span><i>Shon</i></span>
            <span><i className="tint">Michael</i></span>
            <span><i className="last">P N</i></span>
          </h2>

          <p className="badge rv">
            <i aria-hidden="true" />
            Open to opportunities ·{' '}
            <a href="tel:+918301984578">+91 83019 84578</a>
          </p>

          <p className="intro-line rv">Building practical software.</p>
          <p className="intro-copy rv">
            Full-stack developer from Kochi, finishing an MCA at KTU. I work in
            React and Node, and I care most about the unglamorous part — making
            sure a request actually reaches the person who can act on it.
          </p>

          <div className="intro-cta rv">
            <a className="btn btn--solid mag" href="#work">
              <span>View projects</span>
              <IconOut />
            </a>
            <a
              className="btn mag"
              href="/Shon_Michael_PN_Resume.pdf"
              target="_blank"
              rel="noopener"
            >
              <span>Download resume</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </div>

        <Portrait />
      </div>
    </section>
  );
}
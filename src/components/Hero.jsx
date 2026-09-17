import PipelineDemo from './PipelineDemo';
import { IconOut } from '../icons';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1 id="headline">
            <span className="word"><span>I&nbsp;build</span></span>
            <span className="word"><span>systems</span></span>
            <span className="word"><span>that</span></span>
            <span className="word"><span><em>close</em></span></span>
            <span className="word"><span>the</span></span>
            <span className="word"><span>loop.</span></span>
          </h1>
          <p className="hero-sub">
            A citizen files a pothole. A charity posts a need. Someone has to
            receive it, route it, and mark it done. I write the full stack that
            carries a request from the person who raises it to the person who
            can actually close it.
          </p>
          <div className="hero-cta">
            <a className="btn btn--solid mag" href="#work">
              <span>See the work</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
            <a className="btn mag" href="mailto:shonmichaelpn@gmail.com">
              <span>shonmichaelpn@gmail.com</span>
              <IconOut />
            </a>
          </div>
        </div>

        <PipelineDemo />
      </div>
    </section>
  );
}
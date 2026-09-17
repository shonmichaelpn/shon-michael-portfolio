import Slideshow from './Slideshow';
import { IconBack, IconGit, IconOut } from '../icons';

export default function ProjectDetail({ project: p, onBack }) {
  return (
    <>
      <button className="btn btn--sm mag js-back" onClick={onBack}>
        <IconBack />
        <span>All projects</span>
      </button>

      <div className="d-hero">
        <div>
          <p className="eyebrow">{p.no} — case study</p>
          <h2>{p.title}</h2>
          <p>{p.blurb}</p>
          <div className="d-actions">
            <a className="btn btn--solid mag" href={p.github} target="_blank" rel="noopener">
              <span>View source code</span>
              <IconGit />
            </a>
            {p.demo && (
              <a className="btn mag" href={p.demo} target="_blank" rel="noopener">
                <span>Live demo</span>
                <IconOut />
              </a>
            )}
          </div>
        </div>
        <Slideshow project={p} />
      </div>

      <div className="panels">
        <article className="panel">
          <p className="eyebrow">The problem</p>
          <h3>{p.problem.t}</h3>
          <p>{p.problem.d}</p>
        </article>
        <article className="panel">
          <p className="eyebrow">The solution</p>
          <h3>{p.solution.t}</h3>
          <p>{p.solution.d}</p>
        </article>
      </div>

      <div className="d-sub">
        <p className="eyebrow">How a request moves</p>
        <h2>From raised to closed.</h2>
      </div>
      <div className="flow">
        {p.workflow.map((s, i) => (
          <div className="step" key={i}>
            <b>{String(i + 1).padStart(2, '0')}</b>
            <p>{s}</p>
          </div>
        ))}
      </div>

      <div className="d-sub">
        <p className="eyebrow">System design</p>
        <h2>Built around three roles.</h2>
      </div>
      <div className="panels">
        {p.roles.map(r => (
          <article className="panel" key={r.t}>
            <h3>{r.t}</h3>
            <p>{r.d}</p>
          </article>
        ))}
      </div>

      <div className="panels">
        <article className="panel">
          <p className="eyebrow">Technology</p>
          <h3>What it's made of.</h3>
          <div className="tags" style={{ marginBottom: 0 }}>
            {p.tech.map(t => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </article>
        <article className="panel">
          <p className="eyebrow">My contribution</p>
          <h3>What I actually did.</h3>
          <ul>
            {p.contribution.map(c => <li key={c}>{c}</li>)}
          </ul>
        </article>
      </div>
    </>
  );
}
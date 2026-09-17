import { useRef } from 'react';
import { IconGit, IconOut } from '../icons';

export default function ProjectCard({ project: p, onOpen }) {
  const cardRef = useRef(null);

  const onPointerMove = e => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', e.clientX - r.left + 'px');
    card.style.setProperty('--my', e.clientY - r.top + 'px');
  };

  const folder = p.id === 'cityreport' ? 'CityReport' : 'BridgeAid';

  return (
    <article
      ref={cardRef}
      className="case rv"
      data-id={p.id}
      onPointerMove={onPointerMove}
    >
      <div className="case-inner">
        <div className="case-copy">
          <span className="case-no">{p.no} — case study</span>
          <h3>{p.title}</h3>
          <p>{p.blurb}</p>
          <div className="tags">
            {p.tech.map(t => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
          <div className="case-actions">
            <button
              className="btn btn--sm btn--solid mag js-open"
              onClick={() => onOpen(p.id)}
            >
              <span>Read the case study</span>
              <IconOut />
            </button>
            <a
              className="btn btn--sm mag"
              href={p.github}
              target="_blank"
              rel="noopener"
            >
              <span>Source</span>
              <IconGit />
            </a>
            {p.demo && (
              <a
                className="btn btn--sm mag"
                href={p.demo}
                target="_blank"
                rel="noopener"
              >
                <span>Live demo</span>
                <IconOut />
              </a>
            )}
          </div>
        </div>

        <div className="shot">
          <img
            src={p.image}
            alt={`${p.title} interface`}
            loading="lazy"
            onLoad={e => e.currentTarget.parentNode.classList.add('has-img')}
            onError={e => e.currentTarget.remove()}
          />
          <div className="ph">
            <b>{p.title}</b>
            <span>Screenshot loads from /{folder}/ in your repo</span>
          </div>
        </div>
      </div>
    </article>
  );
}
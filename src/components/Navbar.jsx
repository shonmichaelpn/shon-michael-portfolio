import { useEffect, useRef, useState } from 'react';
import useTheme from '../hooks/useTheme';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#approach', label: 'How I build' },
  { href: '#toolkit', label: 'Toolkit' },
  { href: '#study', label: 'Study' },
  { href: '#certs', label: 'Certificates' },
];

export default function Navbar({ drawerOpen, onToggleDrawer }) {
  const pillRef = useRef(null);
  const progressRef = useRef(null);
  const linksRef = useRef([]);
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState(null);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 60);
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.width =
          (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
      }
      const ids = ['work', 'approach', 'toolkit', 'study', 'certs', 'contact'];
      const mid = window.innerHeight * 0.35;
      let cur = null;
      if (window.scrollY > window.innerHeight * 0.5) {
        cur = ids.reduce((acc, id) => {
          const el = document.getElementById(id);
          return el && el.getBoundingClientRect().top <= mid ? id : acc;
        }, null);
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const pill = pillRef.current;
    if (!pill) return;
    const idx = LINKS.findIndex(l => l.href === '#' + active);
    const li = linksRef.current[idx];
    if (!li) {
      pill.classList.remove('on');
      return;
    }
    pill.style.width = li.offsetWidth + 'px';
    pill.style.transform = `translateX(${li.offsetLeft}px)`;
    pill.classList.add('on');
  }, [active]);

  return (
    <header className={`nav${stuck ? ' stuck' : ''}`}>
      <a className="mark" href="#top">
        <b>Shon Michael</b>
        <span>Full-stack developer · Kochi</span>
      </a>

      <nav aria-label="Sections">
        <ul className="nav-links" id="nav-links">
          <span className="nav-pill" ref={pillRef} aria-hidden="true" />
          {LINKS.map((l, i) => (
            <li key={l.href} ref={el => (linksRef.current[i] = el)}>
              <a
                href={l.href}
                className={active === l.href.slice(1) ? 'is-active' : ''}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav-right">
        <button className="toggle" onClick={toggle} aria-label="Switch colour theme">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>

        <a className="nav-hire" href="#contact">
          <i aria-hidden="true" />
          <span>Open to work</span>
        </a>

        <button
          className={`nav-burger${drawerOpen ? ' on' : ''}`}
          onClick={onToggleDrawer}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
          type="button"
        >
          <span />
        </button>
      </div>

      <div className="nav-progress" ref={progressRef} aria-hidden="true" />
    </header>
  );
}
import { useEffect } from 'react';

const LINKS = [
  { href: '#work', label: 'Work', n: '01' },
  { href: '#approach', label: 'How I build', n: '02' },
  { href: '#toolkit', label: 'Toolkit', n: '03' },
  { href: '#study', label: 'Study', n: '04' },
  { href: '#certs', label: 'Certificates', n: '05' },
  { href: '#contact', label: 'Contact', n: '06' },
];

export default function MobileDrawer({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className={`drawer${open ? ' is-open' : ''}`} id="drawer">
      <ul>
        {LINKS.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={onClose}>
              {l.label}
              <em>{l.n}</em>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
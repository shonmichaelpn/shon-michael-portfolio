import { IconOut } from '../icons';

const LINKS = [
  { label: 'Email', text: 'shonmichaelpn@gmail.com', href: 'mailto:shonmichaelpn@gmail.com' },
  { label: 'Phone', text: '+91 83019 84578', href: 'tel:+918301984578' },
  { label: 'GitHub', text: 'shonmichaelpn', href: 'https://github.com/shonmichaelpn' },
  { label: 'LinkedIn', text: 'shohn-michael-pn', href: 'https://linkedin.com/in/shohn-michael-pn' },
  { label: 'Resume', text: 'Download PDF', href: '/Shon_Michael_PN_Resume.pdf' },
];

const EXT = ['GitHub', 'LinkedIn', 'Resume'];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="rv">
          <p className="eyebrow">Contact</p>
          <h2>Tell me what needs closing.</h2>
          <p style={{ color: 'var(--mute)' }}>
            I read everything and reply within a day. A short description of the
            problem is more useful to me than a formal brief.
          </p>
        </div>

        <div className="links rv">
          {LINKS.map(l => {
            const isExt = EXT.includes(l.label);
            const isResume = l.label === 'Resume';
            return (
              <a
                className="link mag"
                href={l.href}
                key={l.label}
                {...(isResume ? { download: 'Shon_Michael_PN_Resume.pdf' } : {})}
                {...(isExt && !isResume ? { target: '_blank', rel: 'noopener' } : {})}
              >
                <small>{l.label}</small>
                <b>{l.text}</b>
                <IconOut />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
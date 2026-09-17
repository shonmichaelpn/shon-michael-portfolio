import SectionHead from './SectionHead';
import { IconOut } from '../icons';

const CERTS = [
  {
    grade: 'NSQF Level 5 · Grade A+',
    title: 'Cloud Application Developer',
    issuer: 'Skill India with Don Bosco Tech · September 2024',
    href: '/Cloud_Application_Developer_NSQF.pdf',
  },
  {
    grade: 'Completed',
    title: 'Foundations of Cloud, IoT and Edge ML',
    issuer: 'Cloud · IoT · Edge computing · Machine learning',
    href: '/Foundation_of_Cloud_IoT_Edge_ML.pdf',
  },
];

export default function Certs() {
  return (
    <section id="certs">
      <div className="wrap">
        <SectionHead eyebrow="Certificates" title="Formal training.">
          Cloud-side credentials that sit alongside the web work.
        </SectionHead>
        <div className="certs rv">
          {CERTS.map(c => (
            <article className="cert" key={c.title}>
              <span className="grade">{c.grade}</span>
              <h3>{c.title}</h3>
              <span>{c.issuer}</span>
              <a href={c.href} target="_blank" rel="noopener">
                View certificate <IconOut />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
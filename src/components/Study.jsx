import SectionHead from './SectionHead';

const ITEMS = [
  { h: 'Master of Computer Applications', s: 'APJ Abdul Kalam Technological University · CGPA 8.1', w: '2024 — 2026' },
  { h: 'BSc Mathematics', s: 'Mahatma Gandhi University', w: '2021 — 2024' },
  { h: 'Higher Secondary Education, Computer Science', s: 'Kerala State Board', w: '2019 — 2021' },
];

export default function Study() {
  return (
    <section id="study">
      <div className="wrap">
        <SectionHead eyebrow="Study" title="Academic Foundation">
          A Foundation in Mathematics, followed by a focused training in computer applications and software development.
        </SectionHead>
        <div className="tl rv">
          {ITEMS.map(it => (
            <div className="tl-item" key={it.h}>
              <div>
                <h3>{it.h}</h3>
                <span>{it.s}</span>
              </div>
              <span className="tl-when">{it.w}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
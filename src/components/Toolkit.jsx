import SectionHead from './SectionHead';

const COLS = [
  {
    title: 'Interface',
    items: ['React', 'JavaScript (ES2023)', 'HTML & semantic markup', 'CSS custom-property systems', 'Responsive grid & motion'],
  },
  { title: 'Server', items: ['Node.js', 'Express', 'REST API design', 'JWT & role-based access', 'Python'] },
  { title: 'Data', items: ['MongoDB', 'MySQL', 'Schema & relationship design', 'Query optimisation'] },
  { title: 'Working', items: ['Git & GitHub', 'Postman', 'Agile / Scrum', 'Java, C', 'Cloud & IoT foundations'] },
];

export default function Toolkit() {
  return (
    <section id="toolkit">
      <div className="wrap">
        <SectionHead eyebrow="Toolkit" title="What I reach for.">
          Grouped by what it's actually for, not by how impressive the logo looks.
        </SectionHead>
        <div className="kit rv">
          {COLS.map(col => (
            <div className="kit-col" key={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.items.map(it => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
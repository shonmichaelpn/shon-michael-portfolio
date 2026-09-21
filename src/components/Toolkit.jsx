import SectionHead from './SectionHead';

const COLS = [
  {
    title: 'Full-stack Product',
    items: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'HTML5 & CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'REST API design', 'JWT Authentication', 'Role-based Access Control', 'Postman'],
  },
  { title: 'Data & Systems', items: ['MongoDB', 'Mongoose', 'MySQL', 'Schema design', 'Query optimisation', 'Data modelling'] },
  { title: 'Delivery & Workflow', items: ['Git & GitHub', 'Vercel', 'Agile / Scrum'] },
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
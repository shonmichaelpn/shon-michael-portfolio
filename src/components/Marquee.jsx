const ITEMS = [
  'React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'JWT auth', 'Next.js',
  'REST APIs', 'Role-based access', 'Git', 'Python', 'OOP', 'JavaScript', 'CSS', 
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" id="track">
        {ITEMS.map((t, i) => <i key={`a-${i}`}>{t}</i>)}
        {ITEMS.map((t, i) => <i key={`b-${i}`}>{t}</i>)}
      </div>
    </div>
  );
}
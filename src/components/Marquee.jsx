const ITEMS = [
  'React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'JWT auth',
  'REST APIs', 'Role-based access', 'Git', 'Python', 'Java',
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
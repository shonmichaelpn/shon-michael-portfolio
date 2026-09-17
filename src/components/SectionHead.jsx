export default function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="sec-head rv">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children && <p>{children}</p>}
    </div>
  );
}
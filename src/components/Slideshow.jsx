import { useEffect, useRef, useState } from 'react';

export default function Slideshow({ project: p }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const trackRef = useRef(null);

  const count = p.gallery.length;
  useEffect(() => {
    if (count <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex(current => (current + 1) % count);
    }, 3400);
    return () => clearInterval(timerRef.current);
  }, [count]);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  return (
    <div className="slideshow">
      <div className="slide-track" ref={trackRef}>
        {p.gallery.length > 0 ? p.gallery.map((g, i) => (
          <div key={i}>
            <img
              src={g}
              alt={`${p.title} screen ${i + 1}`}
              onLoad={e =>
                e.currentTarget.parentNode.parentNode.parentNode.classList.add('has-img')
              }
              onError={e => e.currentTarget.remove()}
            />
            <div className="ph">
              <b>{p.title} — screen {i + 1}</b>
              <span>Add screenshots to your public folder</span>
            </div>
          </div>
        )) : (
          <div>
            <div className="ph">
              <b>{p.title}</b>
              <span>Screenshots coming soon</span>
            </div>
          </div>
        )}
      </div>
      <div className="dots">
        {p.gallery.map((_, i) => (
          <button
            key={i}
            className={i === index ? 'on' : ''}
            aria-label={`Screen ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
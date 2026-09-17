import { useEffect, useRef } from 'react';

export default function Portrait() {
  const portraitRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const portrait = portraitRef.current;
    const frame = frameRef.current;
    if (!portrait || !frame) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!matchMedia('(hover:hover)').matches) return;

    const onMove = e => {
      const r = portrait.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) / r.width;
      const py = (e.clientY - (r.top + r.height / 2)) / r.height;
      frame.style.transform = `scale(1.02) translate(${px * 14}px,${py * 14}px)`;
    };
    const onLeave = () => {
      frame.style.transform = '';
    };

    portrait.addEventListener('pointermove', onMove);
    portrait.addEventListener('pointerleave', onLeave);
    return () => {
      portrait.removeEventListener('pointermove', onMove);
      portrait.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const onLoad = e => e.currentTarget.parentNode.classList.add('has-img');
  const onError = e => e.currentTarget.remove();

  return (
    <div className="portrait rv" ref={portraitRef} id="portrait">
      <div className="portrait-ring" />
      <div className="portrait-frame" id="portrait-frame" ref={frameRef}>
        <img
          src="/profile.jpg"
          alt="Shon Michael P N"
          onLoad={onLoad}
          onError={onError}
        />
        <div className="ph">
          <b>Your photo</b>
          <span>Save it as /profile.jpg in your public folder</span>
        </div>
      </div>
      <span className="orbit b">MERN stack</span>
    </div>
  );
} 
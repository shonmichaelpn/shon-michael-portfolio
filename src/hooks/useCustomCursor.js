import { useEffect } from 'react';

export default function useCustomCursor() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!matchMedia('(hover:hover)').matches) return;
    if (!matchMedia('(pointer:fine)').matches) return;

    const ring = document.querySelector('.cursor');
    const dot = document.querySelector('.cursor-dot');
    if (!ring || !dot) return;

    let x = innerWidth / 2;
    let y = innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf;

    const onMove = e => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x - 2.5}px,${y - 2.5}px)`;
      ring.style.opacity = dot.style.opacity = '1';
      ring.classList.toggle('is-hot', !!e.target.closest('a,button,.case'));
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      ring.style.transform = `translate(${rx - ring.offsetWidth / 2}px,${
        ry - ring.offsetHeight / 2
      }px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
}
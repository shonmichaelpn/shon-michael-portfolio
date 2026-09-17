import { useEffect } from 'react';

export default function useMagnetic() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!matchMedia('(hover:hover)').matches) return;

    const attach = () => {
      document.querySelectorAll('.mag').forEach(el => {
        if (el.dataset.mag) return;
        el.dataset.mag = '1';
        el.addEventListener('pointermove', e => {
          const r = el.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) * 0.18;
          const dy = (e.clientY - (r.top + r.height / 2)) * 0.28;
          el.style.transform = `translate(${dx}px,${dy}px)`;
        });
        el.addEventListener('pointerleave', () => {
          el.style.transform = '';
        });
      });
    };

    attach();

    const mo = new MutationObserver(() => attach());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => mo.disconnect();
  }, []);
}
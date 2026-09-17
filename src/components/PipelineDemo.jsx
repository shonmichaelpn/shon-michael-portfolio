import { useEffect, useState } from 'react';

const STAGES = [
  { name: 'Citizen files the report', meta: 'submitted' },
  { name: 'Categorised and queued', meta: 'queued' },
  { name: 'Admin assigns an authority', meta: 'assigned' },
  { name: 'Authority takes the job', meta: 'in progress' },
  { name: 'Status updated to resolved', meta: 'resolved' },
  { name: 'Citizen sees it closed', meta: 'closed' },
];

export default function PipelineDemo() {
  const [active, setActive] = useState(0);
  const [clock, setClock] = useState('live');

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % (STAGES.length + 1));
    }, 1300);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const tick = () =>
      setClock(new Date().toLocaleTimeString('en-IN', { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pipe" id="pipe" aria-hidden="true">
      <div className="pipe-head">
        <b>Report #4471 · drainage collapse</b>
        <small id="clock">{clock}</small>
      </div>
      {STAGES.map((s, i) => (
        <div
          key={s.meta}
          className={`stage${i === active ? ' on' : ''}${i < active ? ' done' : ''}`}
          data-meta={s.meta}
        >
          <i className="node" />
          <span className="stage-name">{s.name}</span>
          <span className="stage-meta">{s.meta}</span>
        </div>
      ))}
      <p className="pipe-foot">The workflow behind CityReport, running as a loop.</p>
    </div>
  );
}
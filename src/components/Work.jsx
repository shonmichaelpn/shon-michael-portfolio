import { useEffect, useState } from 'react';
import { projects } from '../data/projects';
import SectionHead from './SectionHead';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';

export default function Work() {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    document.body.classList.toggle('detail-open', !!openId);
    return () => document.body.classList.remove('detail-open');
  }, [openId]);

  const openProject = projects.find(p => p.id === openId);

  return (
    <section id="work">
      <div className="wrap">
        {!openId && (
          <>
            <SectionHead eyebrow="Selected work" title="Two platforms, one idea.">
              Both are role-based systems where a request has to survive the
              handoff between strangers. That handoff is the hard part, and it's
              the part I spend my time on.
            </SectionHead>
            <div className="work-list" id="work-list">
              {projects.map(p => (
                <ProjectCard key={p.id} project={p} onOpen={setOpenId} />
              ))}
            </div>
          </>
        )}

        {openId && openProject && (
          <div className="detail is-open" id="detail">
            <ProjectDetail project={openProject} onBack={() => setOpenId(null)} />
          </div>
        )}
      </div>
    </section>
  );
}
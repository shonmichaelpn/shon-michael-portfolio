export default function Approach() {
  return (
    <section id="approach">
      <div className="wrap about-grid">
        <div className="rv">
          <p className="eyebrow">How I build</p>
          <h2>Design the roles first, then the screens.</h2>
        </div>
        <div className="rv about-body">
          <p>
            I came to software from mathematics, where I learned to value clarity,
            structure, and precise solutions. I bring that approach into my projects
            by first defining the users, their roles, and what each role is allowed to
            do — citizen, authority, admin; donor, organisation, admin. Starting with
            clear responsibilities helps me build interfaces and systems that work
            together consistently.
          </p>
          <p>
            On the frontend, I work with React, TypeScript, and Next.js, using a
            design-token-based CSS system where colour, typography, and spacing are
            managed through reusable custom properties. On the backend, I work with
            Node.js, Express, and MongoDB, building REST APIs with JWT authentication,
            role-based access control, and route-level authorization.
          </p>
          <p>
            I completed my MCA at KTU and am currently looking for a full-stack or 
            frontend development role where I can contribute to real products,
            learn from an experienced team, and continue growing as a developer.
          </p>

          <dl className="facts">
            <div className="fact">
              <dt>Based in</dt>
              <dd>Kochi, Ernakulam, Kerala</dd>
            </div>
            <div className="fact">
              <dt>Focus</dt>
              <dd>Full-stack web · design systems</dd>
            </div>
            <div className="fact">
              <dt>Languages</dt>
              <dd>English, Hindi, Tamil, Malayalam</dd>
            </div>
            <div className="fact">
              <dt>Status</dt>
              <dd>MCA completed 2026 · available now</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
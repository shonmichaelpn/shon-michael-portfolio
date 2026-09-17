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
            I came to software from mathematics, which mostly taught me to
            distrust a solution I can't state precisely. So I start every
            project by writing down who the actors are and what each one is
            allowed to do — citizen, authority, admin; donor, organisation,
            admin. Once the permissions are honest, the interface stops arguing
            with itself.
          </p>
          <p>
            On the frontend I work in React with a token-based CSS system:
            colour, type and spacing live as custom properties, components read
            from them, and a theme is one attribute away. On the backend it's
            Node, Express and MongoDB, with JWT sessions and route guards that
            match the roles I wrote down on day one.
          </p>
          <p>
            I'm finishing an MCA at KTU and I'm looking for a full-stack or
            frontend role where the product has real users and real
            consequences.
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
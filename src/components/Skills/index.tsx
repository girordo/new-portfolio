const Skills = () => {
  return (
    <section
      className="flex flex-col justify-center items-center w-full min-h-screen"
      id="skills"
    >
      <h1 className="mb-10 text-5xl font-semibold">
        Skills{' '}
        <span aria-label="emoji" aria-roledescription="Toolbox">
          🧰
        </span>
      </h1>
      <section className="grid grid-cols-2 gap-10">
        <section className="bg-stone-100 hover:shadow-lg transition-shadow duration-500 delay-100 card">
          <article className="card-body">
            <h2 className="card-title">Languages</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className=" badge badge-md badge-success">Javascript</div>
              <div className=" badge badge-md badge-success">Typescript</div>
              <div className=" badge badge-md badge-success">R</div>
              <div className=" badge badge-md badge-success">C</div>
              <div className=" badge badge-md badge-success">Ruby</div>
            </div>
          </article>
        </section>
        <section className="bg-stone-100 hover:shadow-lg transition-shadow duration-500 delay-100 card">
          <article className="card-body">
            <h2 className="card-title">Frameworks</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className=" badge badge-md badge-success">React</div>
              <div className=" badge badge-md badge-success">React Native</div>
              <div className=" badge badge-md badge-success">Expo</div>
              <div className=" badge badge-md badge-success">Next.JS</div>
              <div className=" badge badge-md badge-success">NodeJS</div>
              <div className=" badge badge-md badge-success">Shiny</div>
            </div>
          </article>
        </section>
        <section className="bg-stone-100 hover:shadow-lg transition-shadow duration-500 delay-100 card">
          <article className="card-body">
            <h2 className="card-title">Databases</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className=" badge badge-md badge-success">PostgreSQL</div>
              <div className=" badge badge-md badge-success">MySQL</div>
              <div className=" badge badge-md badge-success">MongoDB</div>
              <div className=" badge badge-md badge-success">Firebase</div>
            </div>
          </article>
        </section>
        <section className="bg-stone-100 hover:shadow-lg transition-shadow duration-500 delay-100 card">
          <article className="card-body">
            <h2 className="card-title">CI/CD</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className=" badge badge-md badge-success">Jenkins</div>
              <div className=" badge badge-md badge-success">
                Github Actions
              </div>
              <div className=" badge badge-md badge-success">AWS</div>
              <div className=" badge badge-md badge-success">GCP</div>
            </div>
          </article>
        </section>
      </section>
    </section>
  )
}

export default Skills

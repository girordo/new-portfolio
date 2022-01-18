const Skills = () => {
  const data = [
    {
      id: 1,
      title: 'Languages',
      techs: ['Javascript', 'Typescript', 'R', 'C'],
    },
    {
      id: 2,
      title: 'Front-end',
      techs: [
        'HTML5',
        'CSS3',
        'UX',
        'Unit Testing',
        'Accessibility',
        'Semantics',
      ],
    },
    {
      id: 3,
      title: 'Frameworks',
      techs: ['React', 'React Native', 'Expo', 'Next.JS', 'Node', 'Shiny'],
    },
    {
      id: 4,
      title: 'Databases',
      techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'],
    },
    {
      id: 5,
      title: 'CI/CD',
      techs: ['Jenkins', 'Github Actions', 'AWS', 'GCP'],
    },
    {
      id: 6,
      title: 'Others',
      techs: ['Linux', 'Docker', 'Git', 'Github', 'Jira', 'Scrum'],
    },
  ]

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
        {data.map(({ id, title, techs }) => (
          <section
            key={id}
            className="bg-gradient-to-br from-purple-900 to-fuchsia-800 hover:shadow-lg transition-shadow duration-300 card"
          >
            <article className="card-body">
              <h2 className="text-white card-title">{title}</h2>
              <div className="grid grid-cols-2 gap-1">
                {techs.map((item, index) => (
                  <div
                    key={index}
                    className="font-semibold shadow-sm badge badge-lg badge-success"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </section>
        ))}
      </section>
    </section>
  )
}

export default Skills

import { motion } from 'framer-motion'

const Skills = () => {
  const data = [
    {
      id: 1,
      title: 'Languages',
      techs: ['Javascript', 'Typescript', 'Elixir', 'R'],
    },
    {
      id: 2,
      title: 'Front-end',
      techs: [
        'HTML5',
        'CSS3',
        'React',
        'Next.js',
        'Semantics',
        'Accessibility',
      ],
    },
    {
      id: 3,
      title: 'Back-end',
      techs: ['NestJS', 'Express', 'Phoenix', 'GraphQL', 'JWT', 'Swagger'],
    },
    {
      id: 4,
      title: 'Databases',
      techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'],
    },
    {
      id: 5,
      title: 'CI/CD',
      techs: ['Jenkins', 'CircleCI', 'GitLab', 'GitHub Actions'],
    },
    {
      id: 6,
      title: 'Others',
      techs: ['Linux', 'Docker', 'Git', 'Scrum', 'AWS', 'GCP'],
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <section
        className="container flex flex-col justify-center items-center mx-auto w-full min-h-screen text-white"
        id="skills"
        data-testid="skills-component"
      >
        <h1 className="mb-10 text-5xl font-semibold">
          Skills{' '}
          <span aria-label="emoji" aria-roledescription="Toolbox">
            🧰
          </span>
        </h1>
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {data.map(({ id, title, techs }) => (
            <section
              key={id}
              className="bg-gradient-to-br from-purple-900 to-fuchsia-800 shadow-md hover:shadow-lg transition-shadow duration-300 card"
            >
              <article className="card-body">
                <h2 className="text-white card-title">{title}</h2>
                <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                  {techs.map((item, index) => (
                    <span
                      key={index}
                      className="font-semibold shadow-md badge badge-lg badge-success"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </section>
          ))}
        </section>
      </section>
    </motion.div>
  )
}

export default Skills

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section data-testid="hero-component">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
      >
        <section className="mx-auto mb-20 w-96 font-medium bg-transparent bg-gradient-to-br shadow-md backdrop-blur-3xl md:w-full card">
          <article className="card-body">
            <h2 className="text-2xl font-semibold card-title">
              Hi I&apos;m Tarcísio{' '}
              <span aria-label="emoji" aria-roledescription="Handshaking">
                🤝
              </span>
              <div className="divider" />
            </h2>
            <p className="text-ellipsis">
              Software engineer, empathic, communicative, open sourcerer since
              2004, and constant learner. I&apos;m working on the frontend using
              React and its ecosystem, with experience across several types of
              business. I hold a BSc in Biomedical Informatics at Universidade
              de São Paulo. Working on backends for fun, I appreciate working
              with NestJS, Fastify, and Phoenix, Django. Using Rust, Elixir,
              Python and R as a side languages for my pet projects.
            </p>
            <h4>
              Working at{' '}
              <a className="underline" href="https://www.bosch.com.br/">
                Bosch
              </a>
            </h4>
            <div className="divider" />
            <p>
              Age: 31{' '}
              <span aria-label="emoji" aria-roledescription="Sparkles">
                ✨
              </span>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:tsgiroldo@gmail.com">tsgiroldo@gmail.com</a>{' '}
              <span aria-label="envelope" aria-roledescription="E-mail">
                ✉️
              </span>
            </p>
            <p>
              Resume:{' '}
              <a
                href="https://github.com/girordo/data-driven-cv/blob/main/resumes/Tarcisio-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                check this out!
              </a>{' '}
              <span aria-label="necktie" aria-roledescription="Necktie">
                👔
              </span>
            </p>
          </article>
        </section>
      </motion.div>
    </section>
  )
}

export default Hero

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      className="flex flex-col justify-center items-center w-full min-h-screen"
      data-testid="hero-component"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
      >
        <section className="mx-auto mb-20 font-medium bg-stone-100 bg-gradient-to-br from-purple-900 to-fuchsia-800 shadow-md text-success card">
          <article className="card-body">
            <h2 className="text-2xl font-semibold card-title">
              Hi I&apos;m Tarcísio{' '}
              <span aria-label="emoji" aria-roledescription="Handshaking">
                🤝
              </span>
              <div className="divider" />
            </h2>
            <h3>
              Software engineer, empathic, communicative, open sourcerer since
              2004, and constant learner. I am focused on the frontend using
              React and its ecosystem, with experience across several types of
              business.
            </h3>
            <h3>
              Experienced in unit testing, React rewriting and refactoring apps
              and frontend performance.
            </h3>
            <h3>
              Working on backends for fun, I appreciate working with NestJS,
              Fastify, and Phoenix.
            </h3>
            <h3>Learning Rust for educational and curiosity purposes.</h3>
            <h4>
              Working at{' '}
              <a className="underline" href="https://spocket.co/">
                Spocket
              </a>
            </h4>
            <div className="divider" />
            <p>
              Age: 30{' '}
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
                href="https://sugary-store-387.notion.site/Resume-d06262eaf78f4180a2b24ec3bac4dc9b"
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
      <a href="#skills" className="text-6xl animate-bounce">
        <span aria-label="emoji" aria-roledescription="Backhand pointing down">
          👇
        </span>
      </a>
    </section>
  )
}

export default Hero

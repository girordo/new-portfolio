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
              I&apos;m a frontend engineer with experience across several types
              of business.
            </h3>
            <h3>
              I hold a BSc in Biomedical Informatics at Universidade de São
              Paulo
            </h3>
            <h3>
              I&apos;m a constant learner, right now learning Elixir and Phoenix
              for curiosity in functional programming.
            </h3>
            <h3>I am a communicative and empathetic person</h3>
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

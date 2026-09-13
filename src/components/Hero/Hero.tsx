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
            </h2>
            <div className="divider" />
            <p className="text-ellipsis">
              Software engineer, empathetic, communicative, open-source
              enthusiast since 2004, and lifelong learner. Focused on software
              architecture and fullstack development within the React, Node.js
              based frameworks(Express, Fastify, Nestjs) and
              JavaScript/TypeScript ecosystem. Holds a BSc in Biomedical
              Informatics from Universidade de São Paulo. Experienced in
              maintaining codebases ranging from monoliths to microfrontends
              implementing design systems with styled-components, TailwindCSS,
              and Stitches. Contributing aside in backend using Java (Spring)
              and Python (FastAPI and Django), developing new features and
              refactoring legacy code. Experiences involving microsservices, API
              gateway and virtualization. Worked extensively with state
              management solutions like Context API, Redux, and Redux Toolkit,
              along with unit testing and refactoring legacy components into
              modern, reusable ones. Had worked with AWS like EC2, S3, Amplify,
              Cloudfront. Currently working with GCP with Pub/Sub, GCS and Cloud
              Run. Hands-on experience with DevOps using Docker, CI/CD pipelines
              with GitHub Actions and CircleCI, configuration management with
              Ansible, cloud services with AWS, containers with LXC, and
              virtualization with Proxmox.
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

import avatar from '../assets/images/avatar.png'

function App() {
  return (
    <section className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-purple-900 to-fuchsia-800">
      <section className="bg-stone-100 shadow-sm shadow-black card">
        <img src={avatar} className="image-full" alt="Card image" />
        <article className="card-body">
          <h2 className="card-title">
            Hi I'm Tarcísio{' '}
            <span aria-label="emoji" aria-roledescription="Handshaking">
              🤝
            </span>
          </h2>
          <h4>
            I'm front-end software engineer focused in React and all ecossystem
          </h4>
          <h4>BSc Biomedical Informatics @ Universidade de São Paulo</h4>
          <h4>Involved with Linux and open source community since 2004</h4>
          <h4>
            Working at{' '}
            <a className="underline" href="https://dasa.com.br/">
              Dasa
            </a>
          </h4>
          <div className="divider" />
          <p>
            Age: 29{' '}
            <span aria-label="emoji" aria-roledescription="Sparkles">
              ✨
            </span>
          </p>
          <p>
            Email: <a href="mailto:tsgiroldo@gmail.com">tsgiroldo@gmail.com</a>{' '}
            <span aria-label="envelope" aria-roledescription="E-mail">
              ✉️
            </span>
          </p>
          <p>
            Location: Ribeirão Preto, SP{' '}
            <span
              aria-label="world"
              aria-roledescription="Globe showing Americas"
            >
              🌎
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
    </section>
  )
}

export default App

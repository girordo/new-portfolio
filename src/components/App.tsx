import avatar from '../assets/images/avatar.png'

function App() {
  return (
    <section className="flex justify-center items-center w-full min-h-screen bg-purple-900">
      <section className="bg-stone-100 shadow-sm shadow-black card">
        <img src={avatar} className="image-full" alt="Card image" />
        <article className="card-body">
          <h2 className="card-title">
            Hi I'm Tarcísio{' '}
            <span aria-label="emoji" aria-roledescription="Handshaking">
              🤝
            </span>
          </h2>
          I'm frontend software engineer focused in React and it ecossystem
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
        </article>
      </section>
    </section>
  )
}

export default App

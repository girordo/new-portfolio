import avatar from '../assets/images/avatar.jpg'

function App() {
  return (
    <>
      <section className="flex justify-center items-center w-full min-h-screen bg-stone-800">
        <article className="flex flex-row justify-center">
          <img src={avatar} className="mr-4 rounded-full" width="40%" />
          <h1 className="text-2xl text-white">Hi, I'm Tarcísio</h1>
          <span role="img" aria-label="Handshaking" className="text-2xl">
            🤝
          </span>
        </article>
      </section>
      <section className="flex justify-center items-center w-full min-h-screen">
        <article className="flex flex-row">
          <h1 className="text-4xl">Hi, I'm Tarcísio</h1>
          <span role="img" aria-label="Handshaking" className="text-4xl">
            🤝
          </span>
        </article>
      </section>
    </>
  )
}

export default App

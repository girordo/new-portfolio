import avatar from '../assets/images/avatar.png'

function App() {
  return (
    <section className="flex flex-row justify-center items-center w-full min-h-screen bg-purple-900">
      <div className="flex flex-row justify-center items-center">
        <div
          className="object-contain"
          style={{ clipPath: 'circle(50% at 50% 50%);' }}
        >
          <img src={avatar} />
        </div>
        <p className="text-4xl text-white">Hi, I'm Tarcísio</p>
        <span role="img" aria-label="Handshaking" className="text-4xl">
          🤝
        </span>
      </div>
    </section>
  )
}

export default App

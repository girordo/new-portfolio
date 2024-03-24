import Hero from 'components/Hero/Hero'
import { WavyBackground } from './Background/Background'

function App() {
  const colors = ['#4caf50', '#03a9f4', '#9c27b0', '#607d8b']

  return (
    <WavyBackground
      colors={colors}
      className="container content-center mx-auto w-96 h-screen lg:w-6/12"
    >
      <Hero />
    </WavyBackground>
  )
}

export default App

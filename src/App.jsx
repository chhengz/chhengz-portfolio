
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import About from './pages/About'
import Contact from './pages/Contact'
import HomePage from './pages/HomePage'
import Projects from './pages/Projects'
import Technologies from './pages/Technologies'

function App() {


  return (
    <>
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <Hero />
      </div>
      <div className="container mx-auto px-8">
        <NavBar />
        <HomePage />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
    </>
  )
}

export default App

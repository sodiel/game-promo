import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App

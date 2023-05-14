import "./App.css"
import Header from "./components/Header"
import Hero from "./components/hero"
import Descripcion from "./components/Descripcion"

function App() {
  return (
    <>
      <main>
        <section id="top-section">
          <Header />
          <Hero />
          <Descripcion id="#descripcion" />
        </section>
      </main>
    </>
  )
}

export default App

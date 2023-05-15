import "./App.css"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Descripcion from "./components/Description/Descripcion"

function App() {
  return (
    <>
      <main>
        <section id="top-section">
          <Header />
          <Hero />
          <Descripcion />
        </section>
      </main>
    </>
  )
}

export default App

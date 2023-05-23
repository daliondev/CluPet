import "./App.css"
import Inicio from "./routes/inicio"
import NotFoud from "./routes/404"
import Ingresar from "./routes/ingresar"

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="*" element={<NotFoud />} />
        <Route path="/ingresar" element={<Ingresar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

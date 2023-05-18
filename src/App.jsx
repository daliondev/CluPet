import "./App.css"
import Inicio from "./routes/inicio"
import NotFoud from "./routes/404"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="*" element={<NotFoud />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

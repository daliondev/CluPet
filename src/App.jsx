import "./App.css"
import Inicio from "./routes/inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/ingresar"
          element={<h1 className="text-center mt-[25%] font-bold">INGRESAR</h1>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

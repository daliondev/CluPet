import FoxBg from "../../assets/BackGround/fox.svg"
import Header from "./components/Header/Header"
import { Link } from "react-router-dom"

const form = () => {
  return (
    <>
      <div className="Hero">
        <Header />
        <div className="mt-20 h-[500px] relative z-[2] grid sm:grid-cols-4 grid-cols-1 items-center place-items-center rounded-3xl text-brown-0   ">
          <div className=" flex flex-col mb-[15%] py-5 col-span-2 bg-[#ffdea4] p-14 rounded-xl ">
            <h1 className="font-Titillium mb-[25px] text-5xl text-brown-0 text-center py-3 ">
              INGRESAR
            </h1>
            <div>
              <label htmlFor="email">Tu Correo</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                className="sm:w-full w-[90%] p-5 rounded-lg bg-[#be9d63] placeholder:text-white text-white"
                placeholder="example@clupet.co"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                className="sm:w-full w-[90%] p-5 mt-2 rounded-lg bg-[#be9d63] placeholder:text-white text-white"
                placeholder="••••••••••••••••••••"
              />
            </div>
            <button className="mt-3 p-4 hover:bg-[#502d16df] bg-[#502d16ff] text-white rounded-lg font-Titillium">
              Enviar
            </button>

            <div className="flex justify-between mt-5 ">
              <p className="text-sm font-light text-[#502d16ff] font-lexend items-start">
                ¿Ya tienes una cuenta?
              </p>
              <Link to="/" className="font-roboto text-brown-0">
                Click Aqui
              </Link>
            </div>
          </div>
        </div>
        <img src={FoxBg} className="video-goat" />
        <div className="capa"></div>
      </div>
    </>
  )
}

export default form

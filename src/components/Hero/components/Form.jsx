import { Link } from "react-router-dom"

const Form = () => {
  return (
    <form className="space-y-4 md:space-y-6" action="#">
      <div>
        <label className="block mb-2 text-sm font-medium text-[#502d16ff]">
          Tu correo
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-[#be9d63]  text-white rounded-lg block w-full p-2.5 placeholder-white"
          placeholder="example@clupet.co"
          required=""
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-[#502d16ff]">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          className="bg-[#be9d63] rounded-lg block w-full p-2.5 placeholder-white"
          placeholder="••••••••••"
          required=""
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-[#502d16ff]">
          Confirmar contraseña
        </label>
        <input
          type="password"
          name="password"
          className="bg-[#be9d63] rounded-lg block w-full p-2.5 placeholder-white"
          placeholder="••••••••••"
          required=""
        />
      </div>
      <button
        type="submit"
        className="bg-[#605137] w-full text-white bg-primary-600 hover:bg-[#746243] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Enviar
      </button>
      <p className="text-sm font-light text-[#502d16ff] flex justify-between font-lexend">
        ¿Ya tienes una cuenta?
        <Link to="/ingresar" className="font-roboto">
          Click Aqui
        </Link>
      </p>
    </form>
  )
}

export default Form

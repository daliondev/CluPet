const Hero = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className=""></div>
      <div className="grid place-items-center h-screen mb-24">
        <div className="bg-[#ffdea4] rounded-2xl mb-[20%] ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-4xl font-lexend font-bold leading-tight text-[#502d16ff]">
              UNETE A CLUPET
            </h1>
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
                  placeholder="clupet@gmail.com"
                  required=""
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-[#502d16ff]">
                  Password
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
                <a href="#" className="font-roboto">
                  Click Aqui
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

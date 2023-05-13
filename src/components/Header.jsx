import logo from "../assets/Logo.svg"

const Header = () => {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center h-20 mt-2">
        <img src={logo} className="w-20 ml-9 mt-2" />
        <div>
          <p
            className="self-start font-lexend text-5xl font-thin "
            id="title-logo"
          >
            CluPet
          </p>
        </div>
      </div>
      <div className="">
        <ul className="pr-5 font-medium font-lexend text-base ">
          <a href="#" className="pr-5 hover:text-[#8b867a]">
            Ingresar
          </a>
          <a href="#" className="pr-5 hover:text-[#8b867a]">
            Proceso
          </a>
          <a href="#" className="pr-5 hover:text-[#8b867a]">
            Referencias
          </a>
          <a href="#" className="pr-5 hover:text-[#8b867a]">
            Descripcion
          </a>
          <a href="#" className="pr-5 hover:text-[#8b867a]">
            Contacto
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Header

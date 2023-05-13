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
        <ul className="mr-5 pb-1 font-medium font-lexend text-base ">
          <a
            href="#"
            className="mr-5 pb-1 hover:text-[#615e58] hover:border-b border-[#502d16ff]"
          >
            Ingresar
          </a>
          <a
            href="#"
            className="mr-5 pb-1 hover:text-[#615e58]  hover:border-b border-[#502d16ff]"
          >
            Proceso
          </a>
          <a
            href="#"
            className="mr-5 pb-1 hover:text-[#615e58] hover:border-b border-[#502d16ff]"
          >
            Referencias
          </a>
          <a
            href="#"
            className="mr-5 pb-1 hover:text-[#615e58] hover:border-b border-[#502d16ff]"
          >
            Descripcion
          </a>
          <a
            href="#"
            className="mr-5 pb-1 hover:text-[#615e58] hover:border-b border-[#502d16ff]"
          >
            Contacto
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Header

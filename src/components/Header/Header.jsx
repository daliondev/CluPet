import logo from "../../assets/Logo.svg"
import Links from "./components/links"

const Header = () => {
  return (
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex items-center h-20 mt-2">
        <img src={logo} className="sm:w-16 sm:mr-2 sm:ml-9 mt-2 w-10 ml-5 " />
        <div>
          <a
            className="sm:self-start sm:font-lexend sm:text-5xl text-3xl font-thin "
            id="title-logo"
            href="/"
          >
            CluPet
          </a>
        </div>
      </div>
      <div className="sm:flex justify-between items-center hidden">
        <Links />
      </div>
    </div>
  )
}

export default Header

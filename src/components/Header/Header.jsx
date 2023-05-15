import logo from "../../assets/Logo.svg"
import navlinks from "../../constants/navlinks.js"

const Header = () => {
  return (
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex items-center h-20 mt-2">
        <img src={logo} className="sm:w-16 sm:mr-2 sm:ml-9 mt-2 w-10 ml-5 " />
        <div>
          <p
            className="sm:self-start sm:font-lexend sm:text-5xl text-3xl font-thin "
            id="title-logo"
          >
            CluPet
          </p>
        </div>
      </div>
      <div className="sm:flex justify-between items-center hidden">
        <ul className="mr-5 pb-1 font-medium font-lexend text-base  ">
          {navlinks.map((navlink, index) => (
            <a
              href={"#" + navlink}
              className="mr-5 pb-1 hover:text-[#615e58] hover:border-b border-[#502d16ff]"
              key={index}
            >
              {navlink}
            </a>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header

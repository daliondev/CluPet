import navlinks from "../../../../../constants/navlinks"
import { Link } from "react-router-dom"

const links = () => {
  return (
    <>
      <ul className="mr-5 pb-1 font-medium font-lexend text-base  ">
        {navlinks.map((navlink, index) => (
          <Link
            to={"/" + navlink}
            className="mr-5 pb-1 hover:text-[#eeeeee] hover:border-b border-white"
            key={index}
          >
            {navlink}
          </Link>
        ))}
        <a
          href="#Descripcion"
          className="mr-5 pb-1 hover:text-[#eeeeee] hover:border-b border-white"
        >
          Descripcion
        </a>
      </ul>
    </>
  )
}

export default links

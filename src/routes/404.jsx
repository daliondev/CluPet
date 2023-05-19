import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <div className="text-center flex flex-col min-h-screen justify-center items-center">
        <div>
          <h1 className="text-8xl font-bold">404</h1>
          <p className="text-xl">Page not found</p>
          <h3>The page you are looking for doesnt exist.</h3>
        </div>
        <Link
          className="bg-black text-white rounded-lg py-5 px-10 mt-5 font-thin"
          to="/"
        >
          Volver al inicio
        </Link>
      </div>
    </>
  )
}

export default NotFound

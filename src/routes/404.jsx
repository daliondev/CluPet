import Header from "../components/Header/Header"

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="grid grid-row-2 place-items-center m-[15%]">
        <div>
          <h1 className="text-9xl">404</h1>
        </div>
        <div>
          <h2 className="text-3xl">Not Found</h2>
        </div>
      </div>
    </>
  )
}

export default NotFound

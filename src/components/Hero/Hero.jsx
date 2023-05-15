import Form from "./components/Form"

const Hero = () => {
  return (
    <div className="grid grid-cols-2">
      <div className=""></div>
      <div className="grid place-items-center h-screen mb-24">
        <div className="bg-[#ffdea4] rounded-2xl mb-[20%] ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-4xl font-lexend font-bold leading-tight text-[#502d16ff]">
              UNETE A CLUPET
            </h1>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

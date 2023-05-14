import rabbit_second from "../assets/Animals/rabbit_2.svg"
import fox from "../assets/Animals/fox.svg"
import rabbit from "../assets/Animals/rabbit.svg"
import bear from "../assets/Animals/bear.svg"
import bird from "../assets/Animals/bird.svg"
import erizo from "../assets/Animals/erizo.svg"

const Descripcion = () => {
  return (
    <div className="sm:grid sm:place-items-center h-screen grid grid-cols-3 grid-rows-2 mt-5 gap-5  m-8">
      <div className="sm:grid sm:grid-cols-3 place-items-center bg-white p-5 rounded-xl">
        <img src={rabbit} className="" />
        <div className="col-span-2">
          <div className="">
            <h1 className="font-lexend font-bold text-2xl">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="font-lexend h-40">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              suscipit porro minima deserunt minus provident rem dolorum ullam
              officia eum quasi
            </p>
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 place-items-center bg-white p-5 rounded-xl">
        <img src={bird} className="h-[150px]" />
        <div className="col-span-2">
          <div className="">
            <h1 className="font-lexend font-bold text-2xl">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="font-lexend h-40">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              suscipit porro minima deserunt minus provident rem dolorum ullam
              officia eum quasi
            </p>
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 place-items-center bg-white p-5 rounded-xl">
        <img src={bear} className="h-[150px]" />
        <div className="col-span-2">
          <div className="">
            <h1 className="font-lexend font-bold text-2xl">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="font-lexend h-40">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              suscipit porro minima deserunt minus provident rem dolorum ullam
              officia eum quasi
            </p>
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 place-items-center bg-white p-5 rounded-xl">
        <img src={fox} className="" />
        <div className="col-span-2">
          <div className="">
            <h1 className="font-lexend font-bold text-2xl">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="font-lexend h-40">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              suscipit porro minima deserunt minus provident rem dolorum ullam
              officia eum quasi
            </p>
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 place-items-center bg-white p-5 rounded-xl">
        <img src={erizo} className="" />
        <div className="col-span-2">
          <div className="">
            <h1 className="font-lexend font-bold text-2xl">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="font-lexend h-40">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              suscipit porro minima deserunt minus provident rem dolorum ullam
              officia eum quasi
            </p>
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 place-items-center bg-white p-5 rounded-xl">
        <img src={rabbit_second} className="" />
        <div className="col-span-2">
          <div className="">
            <h1 className="font-lexend font-bold text-2xl">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="font-lexend h-40">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              suscipit porro minima deserunt minus provident rem dolorum ullam
              officia eum quasi
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Descripcion

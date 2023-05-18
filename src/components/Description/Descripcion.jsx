import rabbit_second from "../../../public/assets/Animals/rabbit_2.svg"
import fox from "../../../public/assets/Animals/fox.svg"
import rabbit from "../../../public/assets/Animals/rabbit.svg"
import bear from "../../../public/assets/Animals/bear.svg"
import bird from "../../../public/assets/Animals/bird.svg"
import erizo from "../../../public/assets/Animals/erizo.svg"
import Card from "./components/CardDescription"

const Descripcion = () => {
  return (
    <div
      className="sm:grid sm:place-items-center h-screen  sm:grid-cols-3 sm:grid-rows-2 mt-5 gap-5 m-8 mb-10"
      id="Descripcion"
    >
      <Card
        title="Lorem ipsum dolor sit amet."
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              suscipit porro minima deserunt minus provident rem dolorum ullam
              officia eum quasi"
        image={rabbit}
      />
      <Card
        title="Lorem ipsum dolor sit amet."
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              suscipit porro minima deserunt minus provident rem dolorum ullam
              officia eum quasi"
        image={bird}
      />
      <Card
        title="Lorem ipsum dolor sit amet."
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              suscipit porro minima deserunt minus provident rem dolorum ullam
              officia eum quasi"
        image={bear}
      />
      <Card
        title="Lorem ipsum dolor sit amet."
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              suscipit porro minima deserunt minus provident rem dolorum ullam
              officia eum quasi"
        image={fox}
      />
      <Card
        title="Lorem ipsum dolor sit amet."
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              suscipit porro minima deserunt minus provident rem dolorum ullam
              officia eum quasi"
        image={erizo}
      />
      <Card
        title="Lorem ipsum dolor sit amet."
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              suscipit porro minima deserunt minus provident rem dolorum ullam
              officia eum quasi"
        image={rabbit_second}
      />
    </div>
  )
}

export default Descripcion

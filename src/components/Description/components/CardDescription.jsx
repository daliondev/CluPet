const Card = (props) => {
  return (
    <div className="sm:grid sm:grid-cols-3 place-items-center bg-white px-5 py-8 rounded-xl mt-4">
      <img src={props.image} className="sm:h-auto h-[300px]" />
      <div className="col-span-2">
        <div className="">
          <h1 className="font-lexend font-bold text-2xl">{props.title}</h1>
          <p className="font-lexend sm:h-40 h-auto mt-4">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card

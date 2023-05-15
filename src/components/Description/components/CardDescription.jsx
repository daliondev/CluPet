const Card = (props) => {
  return (
    <div className="sm:grid sm:grid-cols-3 place-items-center bg-white p-5 rounded-xl">
      <img src={props.image} className="" />
      <div className="col-span-2">
        <div className="">
          <h1 className="font-lexend font-bold text-2xl">{props.title}</h1>
          <p className="font-lexend h-40">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card

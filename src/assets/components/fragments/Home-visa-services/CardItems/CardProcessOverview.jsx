
const CardProcessOverview = ({dataCard}) => {
  return (
    <>
      {dataCard ? dataCard.map((data, index) => (
        <div key={index} className={`flex flex-col px-10 bg-white ${index % 2 == 1 ? "mt-10" : "mt-0"} rounded-xl py-7 gap-y-2`}>
            <h3 className="text-4xl font-semibold text-primary ">{data.id}</h3>
            <h2 className="text-base font-semibold text-primary">{data.title}</h2>
            <p className="text-xs text-primary">{data.description}</p>
        </div>
      )) : "Not Found"}
    </>
  )
}

export default CardProcessOverview

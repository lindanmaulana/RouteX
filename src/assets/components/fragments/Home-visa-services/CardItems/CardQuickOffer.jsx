
const CardQuickOffer = ({data}) => {
  return (
    <>
      {data ? data.map((data, index) => (
        <div key={index} className="">
            <h2 className="text-3xl font-semibold text-white">{data.value}</h2>
            <p className="text-xs text-white">{data.title}</p>
        </div>
      ) ) : "Not Found"}
    </>
  )
}

export default CardQuickOffer

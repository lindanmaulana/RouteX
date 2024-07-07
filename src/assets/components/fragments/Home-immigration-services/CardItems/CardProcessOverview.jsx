
const CardProcessOverview = ({dataCard}) => {
  return (
    <>
      {dataCard?.map(data => (
        <div key={data.id} className="relative p-10 bg-white border border-black/20 rounded-xl">
            <div className="absolute p-2 bg-white border rounded-full top-10 -left-6 border-secondary">
                <img src={data.icon} alt={data.title} className="h-7 w-7" />
            </div>
            <p className="mb-1 text-sm text-primary">{data.nomor}</p>
            <h2 className="mb-3 text-base font-semibold text-primary">{data.title}</h2>
            <p className="text-xs text-black/50">{data.description}</p>
        </div>
      ))}
    </>
  )
}

export default CardProcessOverview

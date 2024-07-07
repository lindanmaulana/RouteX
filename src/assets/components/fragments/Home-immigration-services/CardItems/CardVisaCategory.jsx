
const CardVisaCategory = ({dataCard}) => {
  return (
    <>
      {dataCard?.map(data => (
        <div key={data.id} className="border p-7 border-black/10 hover:border-secondary transition-global rounded-xl">
            <img src={data.icon} alt={data.title} className="w-10 h-10 mb-5" />
            <h4 className="mb-px text-xs text-black/50">{data.type}</h4>
            <h2 className="mb-2 text-xl font-semibold text-primary">{data.title}</h2>
            <p className="text-xs text-black/50">{data.description}</p>
        </div>
      ))}
    </>
  )
}

export default CardVisaCategory

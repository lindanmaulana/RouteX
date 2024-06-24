
const CardFeatures = ({icon, title, description}) => {
  return (
    <div className="px-10 pt-12 pb-16 border border-black/10 rounded-xl">
    <div className="flex items-center justify-center p-3 mb-10 rounded-full h-14 w-14 bg-secondary">
      <img
        src={icon}
        alt={title}
        className="w-full h-full"
      />
    </div>
    <h2 className="mb-5 text-lg font-semibold text-primary">{title}</h2>
    <p className="text-sm text-[#727272">
      {description}
    </p>
  </div>
  )
}

export default CardFeatures

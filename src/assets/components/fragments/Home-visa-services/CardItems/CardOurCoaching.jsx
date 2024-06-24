import { TiArrowRight } from "react-icons/ti"

const CardOurCoaching = ({dataCard}) => {
  return (
    <>
      {dataCard.map(data => (
        <div key={data.id} className="flex items-center justify-between px-10 py-6 border border-black/10 rounded-xl">
            <div>
                <h2 className="text-lg font-semibold text-primary">{data.title}</h2>
                <p className="text-sm text-black/40">{data.description}</p>
            </div>
            <button
              onClick
              className="p-3 border rounded-full hover:text-white hover:border-none hover:bg-secondary border-black/20 text-primary"
            >
              <TiArrowRight />
            </button>
        </div>
      ))}
    </>
  )
}

export default CardOurCoaching

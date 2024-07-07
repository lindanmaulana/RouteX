
import { IoIosArrowForward } from "react-icons/io";
const CardAskQuestion = ({dataCard}) => {
  return (
    <>
     {dataCard?.map(data => (
        <div key={data.id} className="flex items-center justify-between p-5 border rounded-xl border-black/20">
            <h2 className="font-semibold text-primary">{data.question}</h2>
            <button className="p-1 bg-white rounded-full text-primary"><IoIosArrowForward className="text-2xl" /></button>
        </div>
     ))} 
    </>
  )
}

export default CardAskQuestion

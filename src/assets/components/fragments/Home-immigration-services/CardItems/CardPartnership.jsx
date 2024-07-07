
const CardPartnership = ({dataCard}) => {

  return (
    <>
    {dataCard?.map((data) => (
        <img key={data.id} src={data.image} alt={data.title}  />
    ))}
    </>
  )
}

export default CardPartnership

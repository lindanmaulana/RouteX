const CardSuccesStory = ({ dataCard }) => {
  return (
    <>
      {dataCard?.map((data) => (
        <div key={data.id} className="flex items-center justify-center gap-5 px-5 py-4 border border-white rounded-xl">
          <div className="p-3 bg-white rounded-full">
            <img src={data.icon} alt={data.title} />
          </div>
          <div className="text-white">
            <p className="text-3xl font-semibold">{data.amount}</p>
            <h2 className="text-xs">{data.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardSuccesStory;

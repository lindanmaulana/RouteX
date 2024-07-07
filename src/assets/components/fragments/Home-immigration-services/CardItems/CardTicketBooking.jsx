const CardTicketBooking = ({ dataCard, title, icons }) => {
  return (
    <>
      <div>
        <h2 className="mb-3 text-white">{title}</h2>
        <div className="flex items-center justify-start px-8 py-3 border border-white rounded-full gap-x-5">
          {icons}
          <select name={title} className="text-white bg-transparent outline-none">
            {dataCard?.map((data) => {
              const results = data.countries || data.time || data.value;
              return (
                <option key={data.id} value={results} className="text-white bg-primary">
                  {results}
                </option> 
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default CardTicketBooking;

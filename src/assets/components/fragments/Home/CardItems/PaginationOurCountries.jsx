import { TiArrowRight } from "react-icons/ti";

const PaginationOurCountries = (props) => {
  const { totalPages, pages, onChangePage } = props;

  const renderContent = () => {
    const element = [];

    for (let i = 1; i <= totalPages; i++) {
      element.push(
        <button
          onClick={() => onChangePage(i)}
          key={i}
          className={`block bg-white rounded-xl ${
            i === pages ? "flex-1" : "min-w-36"
          } h-80 transition-global duration-1000 flex justify-center items-end p-2`}
        >
          {i === pages && (
            <div className={`transition-global p-6 bg-secondary rounded-xl text-start `}>
              <h2 className="text-lg font-medium text-white mb-2.5">Working Visa</h2>
              <p className="mb-5 text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, corporis?
              </p>
              <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white border rounded-full">
                <span>Apply Now</span> <TiArrowRight />
              </button>
            </div>
          )}
        </button>
      );
    }

    return element;
  };
  return <>{renderContent()}</>;
};

export default PaginationOurCountries;

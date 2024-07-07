
import { dataClientFeedback } from "../../../../services/homeImmigration.services";
import CardClientFeedback from "./CardClientFeedback";

const PaginationClientFeddback = (props) => {
  const { pages, totalPages} = props;

  const renderElement = () => {
    let element = [];

    for (let i = 0; i <= totalPages; i++) {
      element.push(
        <div className="">
          <CardClientFeedback
            numberSerial={i}
            pages={pages}
            dataCard={dataClientFeedback}
          />
        </div>
      );
    }

    return element[pages];
  };
  return <>{renderElement()}</>;
};

export default PaginationClientFeddback;

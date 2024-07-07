
import { dataPartnership } from "../../../../services/homeImmigration.services"
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts"
import CardPartnership from "../CardItems/CardPartnership"

const PartnershipSection = () => {
  return (
    <SectionHomeLayouts>
      <div className="grid grid-cols-5 gap-20">
        <CardPartnership dataCard={dataPartnership} />
      </div>
    </SectionHomeLayouts>
  )
}

export default PartnershipSection

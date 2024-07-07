import { logoGarisKananHijau } from "../../../../../../public/img/logo"
import { dataVisaCategory } from "../../../../services/homeImmigration.services"
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts"
import TitleSection from "../../Home-visa-services/TitleItems/TitleSection"
import CardVisaCategory from "../CardItems/CardVisaCategory"

const VisaCategorySection = () => {
  return (
    <SectionHomeLayouts>
      <TitleSection
          marginBottom="mb-14"
          icon={logoGarisKananHijau}
          titleSection="Coaching Support"
          titleFirst="Path Less Traveled Off"
        />

        <div className="flex gap-7">
            <div className="grid w-2/3 grid-cols-2 grid-rows-2 gap-7">
                <CardVisaCategory dataCard={dataVisaCategory} />
            </div>
            <div className="w-1/3 bg-gray-400 rounded-xl">
                
            </div>
        </div>
    </SectionHomeLayouts>
  )
}

export default VisaCategorySection


import { logoHijau } from "../../../../../../public/img/logo";
import { dataRecentBlogs } from "../../../../services/homeVisa.services";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";
import CardRecentBlogs from "../CardItems/CardRecentBlogs";
import TitleSection from "../TitleItems/TitleSection";

const RecentBlogsSection = () => {
  return (
    <SectionHomeLayouts styleSection="pb-28 pt-14">
      <div className="container max-w-5xl">
        <TitleSection
          icon={logoHijau}
          order="order-last"
          titleSection="Recent Blogs"
          titleFirst="Journeys of Discovery"
          titleSecond="Uncovering Hidden"
          colorFirst="text-primary"
          colorSecond="text-primary"
        />

        <div className="grid grid-cols-3 gap-6">
          <CardRecentBlogs dataCard={dataRecentBlogs} />
        </div>
      </div>
    </SectionHomeLayouts>
  );
};

export default RecentBlogsSection;

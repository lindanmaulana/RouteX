import { logoHijau } from "../../../../../../public/img/home/homeImages";
import { dataRecentBlogs } from "../../../../services/home.services";
import CardRecentBlogs from "../CardItems/CardRecentBlogs";
import TitleSection from "../TitleItems/TitleSection";

const RecentBlogsSection = () => {
  return (
    <section className="pb-28 pt-14">
      <div className="container max-w-5xl">
        <TitleSection
          icon={logoHijau}
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
    </section>
  );
};

export default RecentBlogsSection;

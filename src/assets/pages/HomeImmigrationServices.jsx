import SectionHomeLayouts from "../components/layouts/SectionHomeLayouts";
import FooterPages from "./FooterPages";
import HeaderPages from "./HeaderPages";

const HomeImmigrationServices = () => {
  return (
    <>
      <div className="container max-w-5xl">
        <HeaderPages />
      </div>
      
      <main>
        <SectionHomeLayouts></SectionHomeLayouts>
      </main>
      <FooterPages />
    </>
  );
};

export default HomeImmigrationServices;

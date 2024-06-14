const PartnershipSection = () => {
  const dataPartner = [
    {
      title: "Segment",
      src: "/img/home/partnership/segment.png",
    },
    {
      title: "Splunk",
      src: "/img/home/partnership/splunk.png",
    },
    {
      title: "Hubspot",
      src: "/img/home/partnership/hubspot.png",
    },
    {
      title: "Asana",
      src: "/img/home/partnership/asana.png",
    },
    {
      title: "Airtasker",
      src: "/img/home/partnership/airtasker.png",
    },
  ];
  
  return (
    <section className="py-14">
      <div className="container px-4 lg:px-10">
        <div className="grid max-w-4xl grid-cols-2 gap-32 mx-auto md:grid-cols-3 lg:grid-cols-5">
          {dataPartner.map((data, index) => (
            <img key={index} src={data.src} alt={data.title} className="w-full h-full "/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;

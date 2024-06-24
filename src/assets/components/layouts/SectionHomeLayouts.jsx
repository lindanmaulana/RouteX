const SectionHomeLayouts = (props) => {
    const { children, pt = "pt-14", pb = "pb-14" } = props

  return (
    <section className={`${pt} ${pb}`}>
      <div className="container max-w-5xl">{children}</div>
    </section>
  );
};

export default SectionHomeLayouts;

const SectionHomeLayouts = (props) => {
    const { children,  styleSection, styleContainer } = props

  return (
    <section className={`py-14 ${styleSection}`}>
      <div className={`container max-w-5xl ${styleContainer}`}>{children}</div>
    </section>
  );
};

export default SectionHomeLayouts;

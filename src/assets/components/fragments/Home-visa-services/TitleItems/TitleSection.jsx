import PropTypes from "prop-types";
const TitleSection = (props) => {
  const {
    isIconsKiri,
    iconSecond,
    textAlign = "text-start",
    marginBottom = "mb-14",
    justifyContentLogo = "justify-start",
    icon,
    titleSection,
    order,
    colorTitleSection = "text-primary",
    colorFirst = "text-primary",
    colorSecond = "text-primary",
    titleFirst,
    titleSecond,
  } = props;
  
  return (
    <div className={` flex flex-col ${textAlign} ${marginBottom}`}>
      <p
        className={`flex items-center gap-x-1 ${justifyContentLogo} mb-2`}
      >
        {isIconsKiri === true ? (
           <img src={iconSecond} alt={titleSection} />
        ): null}
        <span className={`text-xs ${order} ${colorTitleSection} uppercase`}>
          {titleSection}
        </span>
        <img src={icon} alt={titleSection} />
      </p>
      <h2 className={`text-4xl font-semibold ${colorFirst}`}>{titleFirst}</h2>
      <h2 className={`text-4xl font-semibold ${colorSecond}`}>{titleSecond ? titleSecond : null}</h2>
    </div>
  );
};

TitleSection.propTypes = {
  order: PropTypes.string,
  textAlign: PropTypes.string,
  marginBottom: PropTypes.string,
  justifyContentLogo: PropTypes.string,
  icon: PropTypes.string,
  titleSection: PropTypes.string.isRequired,
  colorTitleSection: PropTypes.string,
  colorFirst: PropTypes.string,
  colorSecond: PropTypes.string,
  titleFirst: PropTypes.string.isRequired,
  titleSecond: PropTypes.string.isRequired,
};

export default TitleSection;

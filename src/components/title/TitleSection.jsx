import PropTypes from "prop-types";

const TitleSection = ({ text }) => {
	return <h4 className="mb-4 " style={{fontWeight:"700"}}>{text}</h4>;
	
};

TitleSection.propTypes = {
	text: PropTypes.string,
};

export default TitleSection;

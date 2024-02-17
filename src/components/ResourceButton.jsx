import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ResourceButton = ({ to, image, name }) => {
  return (
    <Link to={to}>
      <button className="h-[150px] w-[150px] text-center">
        <img src={image} />
        <h3 className="mt-2">{name}</h3>
      </button>
    </Link>
  );
};

// PropTypes validation
ResourceButton.propTypes = {
  to: PropTypes.string.isRequired, // 'to' prop is expected to be a string and is required
  image: PropTypes.string.isRequired, // 'image' prop is expected to be a string and is required
  name: PropTypes.string.isRequired, // 'page' prop is expected to be a string and is required
};

export default ResourceButton;

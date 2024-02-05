import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeroButton = ({ to, name }) => {
  return (
    <Link to={to}>
      <button className="relative bottom-12 mx-2 flex h-[125px] w-[150px] items-center justify-center rounded-[20px] bg-cerulean text-offwhite drop-shadow-lg hover:border-2 hover:border-offwhite">
        {name}
      </button>
    </Link>
  );
};

// PropTypes validation
HeroButton.propTypes = {
  to: PropTypes.string.isRequired, // 'to' prop is expected to be a string and is required
  name: PropTypes.string.isRequired, // 'page' prop is expected to be a string and is required
};

export default HeroButton;

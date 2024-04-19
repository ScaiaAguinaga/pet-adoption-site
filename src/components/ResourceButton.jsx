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

export default ResourceButton;

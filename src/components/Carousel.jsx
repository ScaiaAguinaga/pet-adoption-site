import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ children: slides }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex ">{slides}</div>
      <div>
        {/* <button>
          <ChevronLeft className="size-10"/>
        </button>
        <button>
          <ChevronRight className="size-10"/>
        </button> */}
      </div>
    </div>
  );
};

export default Carousel;

// PropTypes validation
Carousel.propTypes = {
  children: PropTypes.array.isRequired, // 'slides' prop is expected to be an array and is required
};

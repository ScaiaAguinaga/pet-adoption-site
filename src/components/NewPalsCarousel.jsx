import Carousel from "./Carousel";
import PropTypes from "prop-types";

const NewPalsCarousel = ({ slides, petName }) => {
  return (
    <div>
      <div className="overflow-hidden rounded-t-[20px]">
        <Carousel autoSlide={true}>
          {slides.map((slide, index) => (
            <img key={index} src={slide} className="w-full object-cover aspect-9/10" />
          ))}
        </Carousel>
      </div>
      <div>
        <h2 className="flex h-16 items-center justify-center rounded-b-[20px] bg-cerulean text-offwhite">
          {petName}
        </h2>
      </div>
    </div>
  );
};

export default NewPalsCarousel;

// PropTypes validation
NewPalsCarousel.propTypes = {
  petName: PropTypes.array.isRequired,
  slides: PropTypes.string.isRequired,
};

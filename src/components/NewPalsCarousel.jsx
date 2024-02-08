import Carousel from "./Carousel";
import PropTypes from "prop-types";

const NewPalsCarousel = ({ slides, petName, petDescription }) => {
  return (
    <div className="m-auto flex w-1/3 min-w-[600px] max-w-[900px] rounded-[20px] bg-cerulean p-4">
      {/* Pet picture carousel */}
      <div className="w-2/5 overflow-hidden rounded-[20px]">
        <Carousel autoSlide={true}>
          {slides.map((slide, index) => (
            <img key={index} src={slide} className=" object-cover" />
          ))}
        </Carousel>
      </div>
      {/* Pet name and description */}
      <div className="h-full w-3/5 p-8">
        <h3 className="text-center">{petName}</h3>
        <p className="overflow-hidden"> {petDescription} </p>
      </div>
    </div>
  );
};

export default NewPalsCarousel;

// PropTypes validation
NewPalsCarousel.propTypes = {
  petName: PropTypes.array.isRequired,
  petDescription: PropTypes.string.isRequired,
  slides: PropTypes.string.isRequired,
};

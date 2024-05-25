import Carousel from "./Carousel";

const NewPalsCarousel = ({ slides, petName }) => {
  return (
    <div>
      <div className="overflow-hidden rounded-t-[20px]">
        <Carousel autoSlide={true} hideButtons={"hidden"}>
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              className="aspect-9/10 w-full object-cover"
            />
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

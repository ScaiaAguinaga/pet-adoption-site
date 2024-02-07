import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 2000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const SlideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(SlideInterval);
  });

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full bg-offwhite/80 p-1 text-gray-800 shadow hover:bg-offwhite"
        >
          <ChevronLeft className="size-10" />
        </button>
        <button
          onClick={next}
          className="rounded-full bg-offwhite/80 p-1 text-gray-800 shadow hover:bg-offwhite"
        >
          <ChevronRight className="size-10" />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i} // Added key prop to each div element
              className={`h-3 w-3 rounded-full bg-offwhite transition-all ${curr === i ? "p-2" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

// PropTypes validation
Carousel.propTypes = {
  children: PropTypes.array.isRequired, // 'slides' prop is expected to be an array and is required
  autoSlide: PropTypes.bool.isRequired,
  autoSlideInterval: PropTypes.number.isRequired,
};

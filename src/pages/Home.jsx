import HeroButton from "../components/HeroButton";
import Carousel from "../components/Carousel";
import "../styles.css";

// temp imports
import Sample1 from "../assets/images/Sample1.jpg";
import Sample2 from "../assets/images/Sample2.jpg";
import Sample3 from "../assets/images/Sample3.jpg";
import Sample4 from "../assets/images/Sample4.jpg";

const slides = [Sample1, Sample2, Sample3, Sample4];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex h-[440px] flex-col items-center justify-center gap-10 bg-hero-image bg-cover bg-center">
        <input className="mt-10 h-10 w-1/3 rounded-[20px] border-2 border-cerulean bg-white"></input>
        <div className="text-3xl text-offwhite">Find Your Forever Friend</div>
      </div>
      {/* Hero Section Buttons */}
      <div className="mb-36 flex h-3 justify-center bg-cerulean">
        <HeroButton to="/Test" name="Adopt" />
        <HeroButton to="/Test" name="Rehome" />
        <HeroButton to="/Test" name="Volunteer" />
        <HeroButton to="/Test" name="Contact" />
      </div>
      {/* New Pals */}
      <div className="flex justify-center">New Pals</div>
      {/* New Pals carousel */}
      {/* Need to move this over to the carousel component */}
      {/* <div className="m-auto flex h-[450px] w-[850px] rounded-[20px] border bg-blue-300 p-4 ">
        <div className="grid h-full w-full grid-cols-3 gap-6 rounded-[20px] bg-red-400">
          <div className="flex items-center justify-center overflow-hidden rounded-[20px] bg-green-400">
            <Carousel>
              {slides.map((slide, index) => (
                <img key={index} src={slide} />
              ))}
            </Carousel>
          </div>
          <div className="col-span-2 justify-center bg-purple-500 py-5">
            <div className="border text-center">Name</div>
            <div className="border">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id error
              ducimus enim repellendus suscipit minus omnis iure officia eum
              impedit illum, tenetur nisi similique accusamus quia ipsam quam
              soluta voluptas!
            </div>
          </div>
        </div>
      </div> */}
      <Carousel>
        {slides.map((slide, index) => (
          <img key={index} src={slide} />
        ))}
      </Carousel>
    </>
  );
};

export default Home;

import HeroButton from "../components/HeroButton";
import Carousel from "../components/Carousel";
import "../styles.css";

// temp imports
import Sample1 from "../assets/images/Sample1.jpg";
import Sample2 from "../assets/images/Sample2.jpg";
import Sample3 from "../assets/images/Sample3.jpg";

const slides = [Sample1, Sample2, Sample3];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="mb-36">
        {/* Background and slogan */}
        <div className="flex h-[440px] flex-col items-center justify-center gap-10 bg-hero-image bg-cover bg-center">
          <input className="mt-10 h-10 w-1/3 rounded-[20px] border-2 border-cerulean bg-white"></input>
          <h1 className="text-3xl text-offwhite">Find Your Forever Friend</h1>
        </div>
        {/* Main page buttons */}
        <div className="flex h-3 justify-center bg-cerulean">
          <HeroButton to="/Test" name="Adopt" />
          <HeroButton to="/Test" name="Rehome" />
          <HeroButton to="/Test" name="Volunteer" />
          <HeroButton to="/Test" name="Contact" />
        </div>
      </section>

      {/* New Pals section*/}
      <section>
        <h2 className="flex justify-center">New Pals</h2>
        <div className="m-auto flex w-1/3 min-w-[600px] max-w-[900px] rounded-[20px] bg-cerulean p-4">
          {/* Pet picture carousel */}
          <div className="w-2/5 overflow-hidden rounded-[20px]">
            <Carousel autoSlide={true}>
              {slides.map((slide, index) => (
                <img key={index} src={slide} />
              ))}
            </Carousel>
          </div>
          {/* Pet name and description */}
          <div className="w-3/5 p-8">
            <h3 className="border text-center">Name</h3>
            <p className="border">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id error
              ducimus enim repellendus suscipit minus omnis iure officia eum
              impedit illum, tenetur nisi similique accusamus quia ipsam quam
              soluta voluptas!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

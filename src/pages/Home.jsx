import HeroButton from "../components/HeroButton";
import NewPalsCarousel from "../components/NewPalsCarousel";
import "../styles.css";

// temp imports
import Sample1 from "../assets/images/Sample1.jpg";
import Sample2 from "../assets/images/Sample2.jpg";
import Sample3 from "../assets/images/Sample3.jpg";

const slides = [Sample1, Sample2, Sample3];
const neo = "Neo";
const meow = "meowmeowmeowmeowmeowmeow meowmeowmeowmeowmeowmeow";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="mb-36">
        {/* Background and slogan */}
        <div className="flex h-[440px] flex-col items-center justify-center gap-10 bg-hero-image bg-cover bg-center">
          <input
            id="hero-search"
            className="mt-10 h-10 w-1/4 rounded-[20px] border-2 border-cerulean bg-white"
          ></input>
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
        <NewPalsCarousel slides={slides} petName={neo} petDescription={meow} />
      </section>
    </>
  );
};

export default Home;

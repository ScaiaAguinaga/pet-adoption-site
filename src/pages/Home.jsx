import HeroButton from "../components/HeroButton";
import NewPalsCarousel from "../components/NewPalsCarousel";
import "../styles.css";

// temp imports
import Sample1 from "../assets/images/Sample1.jpg";
import Sample2 from "../assets/images/Sample2.jpg";
import Sample3 from "../assets/images/Sample3.jpg";
import Checklist from "../assets/images/Checklist.png";
import DogBath from "../assets/images/DogBath.png";
import FAQ from "../assets/images/Conversation.png";

const petSlides = [Sample1, Sample2, Sample3];
const petName = "Pet Name";
const petDesc = "Description of Pet";

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
      <section className="mb-36">
        <h2 className="mb-4 flex justify-center">New Pals</h2>
        <NewPalsCarousel slides={petSlides} petName={petName} petDescription={petDesc} />
      </section>

      {/* Home Page Nav Buttons */}
      <section className="mb-36 flex justify-center bg-cerulean">
        <div className="grid grid-cols-3 gap-40 py-20">
          <button className="h-[150px] w-[150px] text-center text-white">
            <img src={Checklist} />
            <div>Adoption Checklist</div>
          </button>
          <button className="h-[150px] w-[150px] text-center text-white">
            <img src={DogBath} />
            <div>Pet Tips</div>
          </button>
          <button className="h-[150px] w-[150px] text-center text-white">
            <img src={FAQ} />
            <div>FAQ</div>
          </button>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="justify-center text-center">
        <div>Mission Statement</div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
          aut? Non tenetur voluptate corporis consequatur ut ipsum incidunt quia
          vero voluptatibus? Sed facilis ad doloribus ipsum ut cumque,
          necessitatibus dolorem?
        </div>
      </section>
    </>
  );
};

export default Home;

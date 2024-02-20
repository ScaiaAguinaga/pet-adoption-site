import HeroButton from "../components/HeroButton";
import ResourceButton from "../components/ResourceButton";
import "../styles.css";

// temp imports
import Sample1 from "../assets/images/Sample1.jpg";
import Sample2 from "../assets/images/Sample2.jpg";
import Sample3 from "../assets/images/Sample3.jpg";
import Checklist from "../assets/images/Checklist.png";
import DogBath from "../assets/images/DogBath.png";
import Conversation from "../assets/images/Conversation.png";
import NewPalsCarousel from "../components/NewPalsCarousel";

const petSlides = [Sample1, Sample2, Sample3];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="mb-40">
        {/* Background and slogan */}
        <div className="flex h-[440px] flex-col items-center justify-center gap-10 bg-hero-image bg-cover bg-center">
          <input
            id="hero-search"
            className="mt-10 h-10 w-1/4 rounded-[20px] border-2 border-cerulean bg-white"
          ></input>
          <h1 className="text-offwhite">Find Your Forever Friend</h1>
        </div>
        {/* Main page buttons */}
        <div className="flex h-4 justify-center bg-cerulean">
          <HeroButton to="/Test" name="Adopt" />
          <HeroButton to="/Test" name="Rehome" />
          <HeroButton to="/Test" name="Volunteer" />
          <HeroButton to="/Test" name="Contact" />
        </div>
      </section>

      {/* New Arrivals section*/}
      <section className="mb-40">
        <h1 className="mb-4 flex justify-center">New Arrivals!</h1>
        <div className="m-auto grid w-[1000px] grid-cols-3 gap-5">
          <NewPalsCarousel slides={petSlides} petName={"Neo"} />
          <NewPalsCarousel slides={petSlides} petName={"Neo"} />
          <NewPalsCarousel slides={petSlides} petName={"Neo"} />
        </div>
      </section>

      {/* Adopting help section */}
      <section className="mb-40 flex justify-center bg-cerulean text-white">
        <div className="grid grid-cols-3 gap-x-40 gap-y-10 pb-32 pt-20">
          <h1 className="col-span-3 text-center">
            Check out our adoption resources!
          </h1>
          <ResourceButton
            to="/Test"
            image={Checklist}
            name="Adoption Checklist"
          />
          <ResourceButton to="/Test" image={DogBath} name="Pet Tips" />{" "}
          <ResourceButton to="/Test" image={Conversation} name="FAQ" />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="flex justify-center text-center">
        <div className="w-1/3">
          <h1 className="mb-4">Our Goal</h1>
          <p>
            At Neo&apos;s Nook, our goal is to create a paw-sitive platform
            where furry friends in need of a loving home can connect with
            compassionate owners ready to open their hearts and homes. We
            believe every wag, purr, and chirp tells a unique story, and
            it&apos;s our mission to match each pet with their perfect match,
            creating tales of forever companionship. With Neo&apos;s Nook,
            finding your fur-ever friend has never been easier or more
            delightful - because every pet deserves a loving home, and every
            home deserves a pet to make life paw-some!
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;

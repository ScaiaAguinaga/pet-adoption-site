import HeroButton from "../components/HeroButton";
import "../styles.css";

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
    </>
  );
};

export default Home;

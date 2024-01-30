import "../styles.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex h-[440px] flex-col items-center justify-center gap-10 bg-hero-image bg-cover bg-center">
        <input className="mt-10 h-10 w-1/3 rounded-[20px] border-2 border-cerulean bg-white"></input>
        <div className="text-offwhite text-3xl">Find Your Forever Friend</div>
      </div>
      {/* Hero Section Buttons */}
      <div className="mb-36 flex h-3 justify-center bg-cerulean">
        <Link to="/Test">
          <button className="text-offwhite hover:border-offwhite relative bottom-12 mx-2 flex h-[125px] w-[150px] items-center justify-center rounded-[20px] bg-cerulean hover:border-2">
            Adopt
          </button>
        </Link>
        <Link to="/Test">
          <button className="text-offwhite hover:border-offwhite relative bottom-12 mx-2 flex h-[125px] w-[150px] items-center justify-center rounded-[20px] bg-cerulean hover:border-2">
            Rehome
          </button>
        </Link>
        <Link to="/Test">
          <button className="text-offwhite hover:border-offwhite relative bottom-12 mx-2 flex h-[125px] w-[150px] items-center justify-center rounded-[20px] bg-cerulean hover:border-2">
            Volunteer
          </button>
        </Link>
        <Link to="/Test">
          <button className="text-offwhite hover:border-offwhite relative bottom-12 mx-2 flex h-[125px] w-[150px] items-center justify-center rounded-[20px] bg-cerulean hover:border-2">
            Contact
          </button>
        </Link>
      </div>
      {/* New Pals */}
    </>
  );
};

export default Home;

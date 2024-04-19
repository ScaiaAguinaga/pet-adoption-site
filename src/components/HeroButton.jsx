import { Link } from "react-router-dom";

const HeroButton = ({ to, name }) => {
  return (
    <Link to={to}>
      <button className="relative bottom-12 mx-2 flex h-[125px] w-[150px] items-center justify-center rounded-[20px] bg-cerulean text-offwhite drop-shadow-lg hover:border-2 hover:border-offwhite">
        <h3>{name}</h3>
      </button>
    </Link>
  );
};

export default HeroButton;

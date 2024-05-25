import { useState } from "react";

const AdoptionCard = ({ name, image }) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const hideDiv = () => {
    setIsHidden(true);
  };

  return (
    <div className="h-[350px] w-[250px]">
      <img
        src={image}
        className="h-4/5 w-full cursor-pointer rounded-t-[20px] object-cover"
        onClick={toggleHidden}
        alt={name}
      />
      <h3 className="flex h-1/5 items-center justify-center rounded-b-[20px] bg-cerulean text-offwhite">
        {name}
      </h3>
      <div
        className={`fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-20 ${isHidden ? "hidden" : ""}`}
        onClick={hideDiv}
      >
        <div className="flex h-2/3 w-1/2 bg-white rounded-[20px]">More Pet Info</div>
      </div>
    </div>
  );
};

export default AdoptionCard;

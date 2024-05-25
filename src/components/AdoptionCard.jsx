const AdoptionCard = ({ name, image }) => {
  return (
    <div className="h-[350px] w-[250px]">
      <img src={image} className="h-4/5 w-full object-cover rounded-t-[20px]"></img>
      <h3 className="flex rounded-b-[20px] h-1/5 items-center justify-center bg-cerulean text-offwhite">
        {name}
      </h3>
    </div>
  );
};

export default AdoptionCard;

import AdoptionCard from "../components/AdoptionCard.jsx";
import AdoptionCardExpanded from "../components/AdoptionCardExpanded.jsx";
import { pets } from "../data/petData.json";

const Adopt = () => {
  return (
    <div className="flex justify-center">
      <div className="grid w-[1250px] grid-cols-4">
        <div className="col-span-4 flex h-96 justify-center">
          <div>Filler Content</div>
        </div>
        {/* Column for search filters */}
        <div className="col-span-1">
          <div className="sticky top-16 flex h-80 justify-center">
            <div>filter</div>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-8 justify-self-center overflow-auto">
          {pets.map((pet) => (
            <div key={pet.id}>
              <AdoptionCard name={pet.name} image={pet.images[1]} />
              <AdoptionCardExpanded />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adopt;

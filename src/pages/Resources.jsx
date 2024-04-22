import "../styles.css";
import { petTypes } from "../data/resourcesPetTypes.json";
import { useState } from "react";
import ChecklistItem from "../components/ChecklistItem";
import Dropdown from "../components/Dropdown";

const Resources = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="m-auto w-1/2">
      <h1 className="flex justify-center py-5">Resources</h1>

      <h1>{selected}</h1>

      {/* Creates labels for each pet type */}
      {/* Dynamically adds styling to show which type is currently selected */}
      <div className="grid w-min grid-flow-col grid-rows-1 gap-3 pl-1">
        {petTypes.map((animal) => (
          <button key={animal.id}>
            <h2
              onClick={() => setSelected(animal.id)}
              className={`flex justify-center rounded-t-[20px] border-b-transparent px-6 ring-4 ring-cerulean ${
                selected === animal.id ? "bg-cerulean text-offwhite" : ""
              }`}
            >
              {animal.type}
            </h2>
          </button>
        ))}
      </div>

      <div className="rounded-b-[20px] rounded-r-[20px] border-4 border-cerulean p-6 pt-3">
        <section className="mb-5">
          <h1 className="font-medium">Checklist</h1>
          <div>
            {/* Render checklist for selected pet type */}
            {/* Map todo array using index of array as unique identifier for array items */}
            {petTypes
              .find((animal) => animal.id === selected)
              ?.todos.map((todo, index) => (
                <ChecklistItem key={index} itemName={todo} />
              ))}
          </div>
        </section>
        <section className="mb-5">
          <h1 className="font-medium">Pet Tips</h1>
          <div>
            <h3>Tip 1</h3>
            <p>You should follow tip 1!</p>
            <h3>Tip 2</h3>
            <p>You should follow tip 2!</p>
            <h3>Tip 3</h3>
            <p>You should follow tip 3!</p>
          </div>
        </section>
        <section>
          <h1 className="pb-3 font-medium">FAQ</h1>
          <div className="grid grid-cols-1 gap-3">
            <Dropdown question="Question 1" answer="Answer 1" />
            <Dropdown question="Question 2" answer="Answer 2" />
            <Dropdown question="Question 3" answer="Answer 3" />
            <Dropdown question="Question 4" answer="Answer 4" />
            <Dropdown question="Question 5" answer="Answer 5" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;

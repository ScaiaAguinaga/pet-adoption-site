import "../styles.css";
import { petTypes } from "../data/resourcesPetTypes.json";
import { useState } from "react";
import ChecklistItem from "../components/ChecklistItem";
import Dropdown from "../components/Dropdown";

const Resources = () => {
  // Contains currently selected pet type id
  // Defaultly holds id of 1
  const [selected, setSelected] = useState(1);

  // Contains currently selected pet info
  const selectedPetType = petTypes.find((animal) => animal.id === selected);

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

      {/* Body of selected pet information */}
      <div className="rounded-b-[20px] rounded-r-[20px] border-4 border-cerulean p-6 pt-3">
        {/* Render Checklist */}
        <section className="mb-5">
          <h1 className="font-medium">Checklist</h1>
          {selectedPetType?.todos.map((todo, index) => (
            <ChecklistItem key={index} itemName={todo} />
          ))}
        </section>
        {/* Render Tips */}
        <section>
          <h1 className="font-medium">Pet Tips</h1>
          {selectedPetType?.tips.map((tip, index) => (
            <div key={index}>
              <h3>Tip {index + 1}</h3>
              <p>{tip}</p>
            </div>
          ))}
        </section>
        {/* Render FAQ */}
        {/* Matches answer to question by using same index num */}
        <section>
          <h1 className="pb-3 font-medium">FAQ</h1>
          <div className="grid grid-cols-1 gap-3">
            {selectedPetType.questions.map((question, index) => (
              <Dropdown
                key={index}
                question={question}
                answer={selectedPetType.answers[index]}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;

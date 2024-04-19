import { useState } from "react";
import { ChevronUp } from "react-feather";
import { ChevronDown } from "react-feather";

const Dropdown = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="border-2 border-gray-300 p-3 rounded-[10px] drop-shadow-lg">
      <div className="flex items-center justify-between">
        <h3
          onClick={() => setShowAnswer(!showAnswer)}
          className="cursor-pointer"
        >
          {question}
        </h3>

        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      <div className="px-5">{showAnswer && <p>{answer}</p>}</div>
    </div>
  );
};

export default Dropdown;

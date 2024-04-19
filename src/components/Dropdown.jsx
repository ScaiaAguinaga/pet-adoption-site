import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Dropdown = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="rounded-[10px] border-2 border-gray-300 p-3 drop-shadow-lg">
      <div className="flex items-center justify-between">
        <h3
          onClick={() => setShowAnswer(!showAnswer)}
          className="w-full cursor-pointer"
        >
          {question}
        </h3>

        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <FaChevronUp/> : <FaChevronDown/>}
        </button>
      </div>
      <div className="px-5">{showAnswer && <p>{answer}</p>}</div>
    </div>
  );
};

export default Dropdown;

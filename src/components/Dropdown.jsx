import { useState } from "react";

const Dropdown = ({question, answer}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div>
      <h3>{question}</h3>
      {showAnswer && <p>{answer}</p>}
    </div>
  );
};

export default Dropdown;

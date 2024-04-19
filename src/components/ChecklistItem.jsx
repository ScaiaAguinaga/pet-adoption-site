import { useState, useEffect } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";

const ChecklistItem = ({ itemName }) => {
  const [checked, setChecked] = useState(() => {
    // Retrieve saved state for checked
    const savedState = localStorage.getItem(itemName);
    return savedState ? JSON.parse(savedState) : false;
  });

  // Update Saved state for checked
  useEffect(() => {
    localStorage.setItem(itemName, JSON.stringify(checked));
  }, [checked, itemName]);

  return (
    <div className="flex">
      <button
        onClick={() => setChecked(!checked)}
        className="mr-2 mt-1 text-2xl"
      >
        {checked ? <MdOutlineCheckBox /> : <MdCheckBoxOutlineBlank />}
      </button>
      <h3>{itemName}</h3>
    </div>
  );
};

export default ChecklistItem;

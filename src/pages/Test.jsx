import "../styles.css";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <div className="text-offwhite h-40 w-40 bg-red-500 rounded-[20px] m-auto flex">
      <Link to="/" className="w-full h-full flex items-center justify-center">
        Back Home
      </Link>
    </div>
  );
};

export default Test;

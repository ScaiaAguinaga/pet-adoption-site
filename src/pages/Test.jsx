import "../styles.css";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <>
      <div className="m-auto flex h-40 w-40 rounded-[20px] bg-red-500 text-offwhite">
        <Link to="/" className="flex h-full w-full items-center justify-center">
          Back Home
        </Link>
      </div>

      <div className="flex bg-red-600 h-60 w-60">
        <button>
          <h1>hi</h1>
        </button>
      </div>
    </>
  );
};

export default Test;

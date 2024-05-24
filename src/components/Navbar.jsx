import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 flex h-16 items-center bg-cerulean px-20 text-offwhite">
      <Link to="" className="text-nowrap">
        <button>
          <h3>Neo&apos;s Nook</h3>
        </button>
      </Link>
      <div className="flex w-full justify-end space-x-4">
        <Link to="/Adopt">
          <button>
            <h3>Adopt</h3>
          </button>
        </Link>
        <Link to="/Rehome">
          <button>
            <h3>Rehome</h3>
          </button>
        </Link>
        <Link to="/Volunteer">
          <button>
            <h3>Volunteer</h3>
          </button>
        </Link>
        <Link to="/Contact">
          <button>
            <h3>Contact</h3>
          </button>
        </Link>
        <Link to="/Resources">
          <button>
            <h3>Resources</h3>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

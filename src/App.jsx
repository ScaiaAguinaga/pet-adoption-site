import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// pages
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Adopt from "./pages/Adopt";
import Rehome from "./pages/Rehome";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
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
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Test" element={<Test />}></Route>
          <Route path="/Adopt" element={<Adopt />}></Route>
          <Route path="/Rehome" element={<Rehome />}></Route>
          <Route path="/Volunteer" element={<Volunteer />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Resources" element={<Resources />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <footer className="mt-40 flex h-[100px] items-center justify-center bg-cerulean">
          Footer Placeholder
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;

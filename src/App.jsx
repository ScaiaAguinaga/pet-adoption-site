import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Navbar and footer
import Navbar from "./components/Navbar";

// Pages
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
        <Navbar/>
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

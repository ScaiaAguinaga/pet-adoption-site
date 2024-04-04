import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Resources from "./pages/Resources";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <nav className="sticky top-0 z-10 flex h-14 items-center justify-center bg-cerulean">
          Navbar Placeholder
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Test" element={<Test />}></Route>
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

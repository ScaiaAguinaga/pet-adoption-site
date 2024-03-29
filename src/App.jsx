import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navbar */}
        <nav className="flex h-14 items-center justify-center bg-cerulean">
          Navbar Placeholder
        </nav>
        <Routes>
          {/* put div here and add margin top for navbar */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/Test" element={<Test />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          {/* div encapsulates here */}
        </Routes>
        <footer className="mt-40 flex h-[100px] items-center justify-center bg-cerulean">
          Footer Placeholder
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Left from "./Components/Left";
import Top from "./Components/Top";
import Body from "./Components/Body";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="app">
      <nav className={`side-nav ${isNavOpen ? "open" : "closed"}`}>
        <Left />
      </nav>

      <div className={`main-content ${isNavOpen ? "expanded" : ""}`}>
        <header className="top-header">
          <button className="toggle-btn" onClick={toggleNav}>
            {isNavOpen ? (
              <>
                <FaArrowLeft /> Hide Sidebar
              </>
            ) : (
              <>
                {" "}
                <FaArrowRight /> Show Sidebar{" "}
              </>
            )}
          </button>
          <Top />
        </header>

        <div className="content-body">
          <Body />
        </div>
      </div>
    </div>
  );
};

export default App;

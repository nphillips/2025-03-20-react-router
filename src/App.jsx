// App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      setDisplayLocation(location);
    }
  };

  return (
    <>
      <div id="container">
        <Navbar />

        <div id="main-section">
          <div
            className={`page-container ${transitionStage}`}
            onAnimationEnd={handleAnimationEnd}
          >
            <Routes location={displayLocation}>
              <Route path="/" element={<Home />} />
              <Route path="/blue" element={<Blue />} />
              <Route path="/red" element={<Red />} />
            </Routes>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default App;

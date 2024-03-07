import React from "react";
import { useEffect } from "react";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Hero from "./components/Hero";

const App = () => {
  // aos init
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div className="overflow-hidden">
      <Hero />
    </div>
  );
};

export default App;

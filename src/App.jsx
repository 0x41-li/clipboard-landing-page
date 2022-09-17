import React, { useEffect } from "react";
import WebFont from "webfontloader";
import Hero from "./sections/Hero";

const App = () => {
  // loads the font required
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Bai Jamjuree:600,400&display=swap"],
      },
    });
  }, []);

  return (
    <>
      <main className="h-[8000px] max-w-screen-2xl mx-auto">
        <Hero />
      </main>
    </>
  );
};

export default App;

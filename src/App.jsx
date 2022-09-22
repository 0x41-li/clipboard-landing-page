import React, { useEffect } from "react";
import WebFont from "webfontloader";
import AccessClipBoardAnywhere from "./sections/AccessClipBoardAnywhere";
import ClipboardDownloads from "./sections/ClipboardDownloads";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import KeepTrackOfYourSnippets from "./sections/KeepTrackOfYourSnippets";
import SuperChargeYourWorkFlow from "./sections/SuperChargeYourWorkFlow";

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
      <main className="mx-auto">
        <Hero />
        <KeepTrackOfYourSnippets />
        <AccessClipBoardAnywhere />
        <SuperChargeYourWorkFlow />
        <ClipboardDownloads />
      </main>
      <Footer />
    </>
  );
};

export default App;

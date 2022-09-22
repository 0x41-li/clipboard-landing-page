import React from "react";

// svgs as components
import { ReactComponent as Logo } from "../assets/images/main-logo.svg";

// images

// components
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="bg-[url(./assets/images/hero-background-mobile.png)] [background-size:100%_363px] bg-no-repeat pt-[123px] lg:bg-[url(./assets/images/hero-background-desktop.png)] lg:pt-[131px]">
      <div className="flex justify-center">
        <Logo />
      </div>

      <div className="px-8  mt-16 lg:mt-14">
        <h1 className="font-primary text-center text-heading font-semibold [font-size:32px] [line-height:40px] [letter-spacing:-0.52px] lg:[font-size:46px] lg:[line-height:58px]">
          A history of everything you copy
        </h1>
        <p className="text-center [letter-spacing:0.12px] mt-4 max-w-[530px] mx-auto lg:max-w-[730px] lg:[font-size:20px]">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>
      <div className="flex flex-col items-center mt-12 lg:flex-row lg:justify-center lg:gap-4">
        <Button
          text="Download for iOS"
          addToClassName="bg-lightGreen hover:bg-[#26bba5bf] [box-shadow:_0px_10px_20px_rgba(137,_229,_199,_0.503305),_inset_0px_-3px_0px_rgba(0,_0,_0,_0.151333)]"
        />
        <Button
          text="Download for Mac"
          addToClassName="bg-lightPurple mt-6 [box-shadow:0px_10px_20px_rgba(0,_0,_0,_0.0988035),_inset_0px_-3px_0px_rgba(0,_0,_0,_0.151333)] hover:bg-[#6173ffbf] lg:mt-0"
        />
      </div>
    </section>
  );
};

export default Hero;

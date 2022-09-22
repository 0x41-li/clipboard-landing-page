import React from "react";
import Button from "../components/Button";

const ClipboardDownloads = () => {
  return (
    <section className="mt-[170px] px-[32px] lg:mt-[150px] lg:px-0">
      <h2 className="">Clipboard for iOS and Mac OS</h2>
      <p className="text-center text-base [letter-spacing:0.12px] [line-height:26px] max-w-[530px] mx-auto lg:max-w-[730px] lg:text-base lg:[line-height:30px] lg:[letter-spacing:0.14px]">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>
      <div className="mt-[44px] flex flex-col items-center lg:flex-row lg:justify-center lg:gap-4 lg:mt-[48px]">
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

export default ClipboardDownloads;

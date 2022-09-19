import React from "react";

// images
import successMessagePopupInADesktopMonitor312w from "../assets/images/success-popup-in-a-desktop-monitor-312w.png";
import successMessagePopupInADesktopMonitor752w from "../assets/images/success-popup-in-a-desktop-monitor-752w.png";

const KeepTrackOfYourSnippets = () => {
  return (
    <section className="mt-[160px] px-[32px] lg:mt-[150px] lg:px-0">
      <h2 className="">Keep track of your snippets</h2>
      <p className="text-center [letter-spacing:0.12px] max-w-[530px] mx-auto lg:max-w-[730px]">
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </p>
      <div className="mt-[65px] lg:flex lg:mt-[80px]">
        <div className="flex justify-center lg:flex-[0_0_50%] lg:justify-end lg:overflow-hidden">
          <picture className="">
            <source
              media="(max-width: 1023px)"
              srcset={successMessagePopupInADesktopMonitor312w}
            />
            <img
              className="lg:w-[752px] lg:max-w-none"
              src={successMessagePopupInADesktopMonitor752w}
              alt="A success message in a popup in a desktop monitor"
            />
          </picture>
        </div>
        <div className="mt-14 flex flex-col gap-12 max-w-[330px] mx-auto md:flex-row md:max-w-full lg:flex-1 lg:flex-col lg:pl-[110px] lg:pr-[128px] lg:gap-[56px] xl:mt-[68px] xl:pr-[250px] ">
          <div className="">
            <h3 className="text-center lg:text-left">Quick Search</h3>
            <p className="text-center mt-[10px] [letter-spacing:0.12px] lg:text-left lg:mt-[8px] lg:text-base lg:[line-height:30px]">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className="">
            <h3 className="text-center lg:text-left">iCloud Sync</h3>
            <p className="text-center mt-[10px] [letter-spacing:0.12px] lg:text-left lg:mt-[8px] lg:text-base lg:[line-height:30px]">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div className="">
            <h3 className="text-center lg:text-left">Complete History</h3>
            <p className="text-center mt-[10px] [letter-spacing:0.12px] lg:text-left lg:mt-[8px] lg:text-base lg:[line-height:30px]">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepTrackOfYourSnippets;

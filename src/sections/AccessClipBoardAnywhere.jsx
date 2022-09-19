import React from "react";

// images
import successPopupInAnIpadAndAMobilePhone311w from "../assets/images/success-popup-in-an-ipad-and-a-mobile-phone-311w.png";
import successPopupInAnIpadAndAMobilePhone812w from "../assets/images/success-popup-in-an-ipad-and-a-mobile-phone-812w.png";

const AccessClipBoardAnywhere = () => {
  return (
    <section className="mt-[186px] px-8 lg:mt-[150px] lg:px-0">
      <div className="max-w-[530px] mx-auto lg:max-w-[730px]">
        <h2 className="">Access Clipboard Anywhere</h2>
        <p className="text-center [letter-spacing:0.2px]">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
      </div>

      <picture className="mx-[-32px] mt-[55px] flex justify-center lg:mx-0 lg:mt-[100px]">
        <source
          media="(max-width: 1023px)"
          srcSet={successPopupInAnIpadAndAMobilePhone311w}
        />
        <img
          src={successPopupInAnIpadAndAMobilePhone812w}
          alt="A success popup in an ipad and a mobile phone"
        />
      </picture>
    </section>
  );
};

export default AccessClipBoardAnywhere;

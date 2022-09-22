import React from "react";

// images and icons
import { ReactComponent as Logo } from "../assets/images/main-logo.svg";
import { ReactComponent as FacebookIcon } from "../assets/images/facebook.svg";
import { ReactComponent as TwitterIcon } from "../assets/images/twitter.svg";
import { ReactComponent as InstagramIcon } from "../assets/images/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-[#9fabb218] mt-[170px] pt-[52px] pb-[53px] px-8 xl:mt-[150px] xl:py-[39px]">
      <div className="lg:flex lg:justify-between lg:items-center lg:mx-auto xl:justify-start xl:items-start xl:max-w-[1110px]">
        <a href="#">
          <Logo className="w-[55px] h-[55px] mx-auto lg:mx-0 xl:[flex:0_0_55px]" />
        </a>

        <ul className="flex flex-col items-center gap-5 mt-[40px] lg:flex-row lg:mt-0 lg:flex-wrap lg:[&>li]:[flex:0_0_140px] xl:[&>li]:[flex:0_0_160px] xl:ml-[135px] xl:[flex:0_0_635px] xl:gap-0">
          <li className="xl:order-1">
            <a
              href="#"
              className="[color:#4C545C] [font-size:18px] [line-height:30px] hover:[color:#26BBA4] [transition-duration:0.4s] ease-in-out transition-colors"
            >
              FAQs
            </a>
          </li>
          <li className="xl:order-5 xl:mt-[12px]">
            <a
              href="#"
              className="[color:#4C545C] [font-size:18px] [line-height:30px] hover:[color:#26BBA4] [transition-duration:0.4s] ease-in-out transition-colors"
            >
              Contact Us
            </a>
          </li>
          <li className="xl:order-2 xl:ml-[30px]">
            <a
              href="#"
              className="[color:#4C545C] [font-size:18px] [line-height:30px] hover:[color:#26BBA4] [transition-duration:0.4s] ease-in-out transition-colors"
            >
              Privacy Policy
            </a>
          </li>
          <li className="xl:order-7 xl:ml-[30px] xl:mt-[12px]">
            <a
              href="#"
              className="[color:#4C545C] [font-size:18px] [line-height:30px] hover:[color:#26BBA4] [transition-duration:0.4s] ease-in-out transition-colors"
            >
              Press Kit
            </a>
          </li>
          <li className="xl:order-4 xl:ml-[30px]">
            <a
              href="#"
              className="[color:#4C545C] [font-size:18px] [line-height:30px] hover:[color:#26BBA4] [transition-duration:0.4s] ease-in-out transition-colors"
            >
              Install Guide
            </a>
          </li>
        </ul>

        <div className="flex justify-center mt-[48px] gap-[40px] items-center lg:mt-0 xl:ml-[165px] xl:gap-[24px] xl:mt-[24px]">
          <a href="#" className="[color:#4C545C] hover:[color:#26BBA4]">
            <FacebookIcon className="w-[24px] h-[24px] fill-current" />
          </a>
          <a href="#" className="[color:#4C545C] hover:[color:#26BBA4]">
            <TwitterIcon className="w-[24px] h-[20px] fill-current" />
          </a>
          <a href="#" className="[color:#4C545C] hover:[color:#26BBA4]">
            <InstagramIcon className="w-[24px] h-[24px] fill-current" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Button = (props) => {
  return (
    <button
      className={
        "text-white font-primary font-semibold w-[311px] h-[56px] rounded-full [font-size:18px] [line-height:30px] [letter-spacing:0.5px] lg:w-[227px]" +
        " " +
        props.addToClassName
      }
    >
      {props.text}
    </button>
  );
};

export default Button;

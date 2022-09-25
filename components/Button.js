import React from "react";

const Button = (props) => {
  const classData = `
    ${props.color ? props.color : "bg-green-400"}
    text-lg 
    text-black 
    h-auto 
    w-max 
    transition
    transform
    duration-700
    hover:scale-110
    text-center 
    font-rob 
    ${props.padd ? props.padd : "pt-2"}
    ${props.padd ? props.padd : "pb-2"}
    px-4
    rounded-lg
    focus:outline-none
    active:opacity-75`;
  return (
    <button onClick={props.onClick} className={classData} disabled={props.disabled} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;

import React from "react";

const Card = (props) => {
  const classData = `${props.color ? props.color : "bg-white"} 
      h-auto 
      ${props.width ? props.width : "w-full"}
      justify-self-center
      shadow-md
      font-rob 
      p-6
      rounded-lg`;
  return (
    <div className={classData}>
      { props.title ?
        <div
          id="title"
          className={`${props.titleAlign ? props.titleAlign : "text-left"
            } text-3xl mb-3`}
        >
          <strong>{props.title}</strong>
        </div> : <div></div>
      }
      <div id="body">{props.children}</div>
    </div>
  );
}

export default Card

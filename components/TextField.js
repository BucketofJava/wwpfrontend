import React from "react"

const TextField = (props) => {
  return (
    <input
      className={`bg-gray-100 w-full p-2 focus:ring-2 focus:ring-blue-500 ${props.errors ? "ring-2 ring-red-500 ring-opacity-50" : ""
        } pl-3 rounded-lg focus:outline-none border-black`}
      placeholder={props.placeholder}
      type={props.type}
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.value}
      name={props.name}
    ></input>
  );
}

export default TextField;

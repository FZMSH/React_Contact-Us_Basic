import React from "react";

function Button(props) {
  const { isOutline, icon, text, ...numbers} = props; 

  const buttonStyle = {
    width: isOutline ? "20vw" : "auto",
    paddingTop: isOutline ? "0.5vw" : "0",
    paddingBottom: isOutline ? "0.5vw" : "0",
    color: isOutline ? "black" : "white",
    
  };

  return (
    <>
      <div
        className={`flex gap-2 ${
          isOutline ? "outline-blue-50" : "bg-black"
        } text-white pt-2 px-1 pb-2 rounded-[.3vw]`}
      >
        <button {...numbers}
          className={`flex items-center gap-2 px-1 justify-center ${
            isOutline ? "border border-black" : ""
          }mx-auto `}
          style={buttonStyle}
        >
          {icon}
          <span className="font-semibold text-[.8vw] text-center">{text}</span>
        </button>
      </div>
    </>
  );
}

export default Button;

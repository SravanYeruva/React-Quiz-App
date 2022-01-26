import React, { useState } from "react";

function OptionsTile({ options, onSelect, chosen }) {
  const chooseOptionHandler = (option) => {
    onSelect(option);
  };
  return (
    <div className="">
      {options.map((option, i) => {
        return (
          <div
            key={i}
            onClick={() => chooseOptionHandler(i)}
            className={`py-3 px-4 my-1 cursor-pointer rounded-lg duration-200 ${
              chosen === i ? "bg-green-400" : "bg-gray-100"
            } ${chosen === i ? "hover:bg-green-400" : "hover:bg-gray-400"}`}
          >
            {`${i + 1}. ${option}`}
          </div>
        );
      })}
    </div>
  );
}

export default OptionsTile;

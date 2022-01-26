import React from "react";

function Start({ onStart }) {
  return (
    <div className="flex bg-orange-500  items-center h-screen  w-full  justify-center">
      <button
        onClick={onStart}
        className="font-extrabold bg-green-500 p-4 rounded-2xl shadow-lg text-white text-3xl"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Start;

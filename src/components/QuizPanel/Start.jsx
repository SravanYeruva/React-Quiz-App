import React from "react";

function Start({ onStart }) {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-orange-500">
      <button
        onClick={onStart}
        className="p-4 text-3xl font-extrabold text-white bg-green-500 shadow-lg rounded-2xl"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Start;

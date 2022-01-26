import React from "react";

function WarningPopUp({ onOkay, count }) {
  return (
    <div className="fixed top-0 left-0 z-50 flex justify-center w-full h-full overflow-scroll bg-black bg-opacity-25 no-scrollbar">
      <div className="bg-white m-3 rounded-xl opacity-100 text-center h-fit w-9/12">
        <div className="text-4xl text-red-600">Warning!!!</div>
        <div className="p-6">
          {`You have changed the tab  which is considered as a
          malpractice,Your quiz is submitted`}
        </div>
        <button
          onClick={onOkay}
          className="p-2 bg-red-500 cursor-pointer rounded-lg shadow-md text-white font-bold m-2"
        >
          Okay,Got it!
        </button>
      </div>
    </div>
  );
}

export default WarningPopUp;

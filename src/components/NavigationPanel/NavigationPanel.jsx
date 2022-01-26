import React from "react";

function NavigationPanel({ questionsStatus, currentQuestion, onClick }) {
  return (
    <div className={"bg-gray-200 rounded-lg justify-center flex flex-wrap"}>
      {questionsStatus.map((questionStatus) => {
        return (
          <div
            onClick={() => onClick(questionStatus["id"])}
            key={questionStatus["id"]}
            className={`w-10 text-center h-10  cursor-pointer p-2 m-2 rounded-full duration-500  ${
              questionStatus["id"] === currentQuestion ? "scale-150" : ""
            }
            ${
              questionStatus["status"] === "answered"
                ? "bg-green-300"
                : questionStatus["status"] === "review"
                ? "bg-violet-300"
                : "bg-gray-300"
            }`}
          >
            {questionStatus["id"] + 1}
          </div>
        );
      })}
    </div>
  );
}

export default NavigationPanel;

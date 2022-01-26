import React from "react";

function QuestionTile({ question }) {
  return (
    <div className="p-4 bg-red-200  rounded-lg">
      <div className="font-bold">{question}</div>
    </div>
  );
}

export default QuestionTile;

import React from "react";
import OptionsTile from "./OptionsTile";
import QuestionTile from "./QuestionTile";

function QuestionPanel({ question, onSelect, chosen }) {
  return (
    <div>
      <QuestionTile question={question["question"]} />
      <OptionsTile
        options={question["options"]}
        onSelect={onSelect}
        chosen={chosen}
      />
    </div>
  );
}

export default QuestionPanel;

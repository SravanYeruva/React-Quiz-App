import { Warning } from "postcss";
import React, { useState, useEffect } from "react";
import { questions, time } from "../../Config/config";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
import QuestionPanel from "../QuestionPanel/QuestionPanel";
import Timer from "../Timer/Timer";
import Submit from "./Submit";
import WarningPopUp from "./WarningPopUp";

function QuizPanel() {
  const questionsList = questions;
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [warningPopUp, setWarningPopUp] = useState(false);
  const [submit, setSubmit] = useState(false);
  const initialStatus = [];
  let count = 0;
  for (let i = 0; i < questionsList.length; i++) {
    initialStatus[i] = { id: i, status: "notAnswered", chosen: "N/A" };
  }

  const onBlur = () => {
    count = count + 1;
    setWarningPopUp(true);
  };

  const closeWarning = () => {
    setWarningPopUp(false);
    setSubmit(true);
  };

  useEffect(() => {
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  const [questionsStatus, setQuestionsStatus] = useState(initialStatus);
  const prevQuestionHandler = () => {
    navigationHandler(currentQuestion - 1);
  };
  const nextQuestionHandler = () => {
    navigationHandler(currentQuestion + 1);
  };
  const navigationHandler = (i) => {
    setcurrentQuestion(i);
  };
  const selectionHandler = (chosen) => {
    statusUpdater(currentQuestion, "answered", chosen);
  };
  const markForReviewHandler = () => {
    statusUpdater(
      currentQuestion,
      "review",
      questionsStatus[currentQuestion]["chosen"]
    );
  };
  const statusUpdater = (i, status, chosen) => {
    let temp = [...questionsStatus];
    temp[i] = { id: i, status: status, chosen: chosen };
    setQuestionsStatus(temp);
  };
  const submitHandler = () => {
    setSubmit(true);
  };
  const seconds = time[1];
  const minutes = time[0];

  if (submit) {
    return (
      <div className="">
        <Submit />
      </div>
    );
  }
  return (
    <div className="flex justify-center w-full">
      {warningPopUp && <WarningPopUp onOkay={() => closeWarning()} />}

      <div className="w-11/12 max-w-4xl m-5">
        <div className="flex items-center justify-between">
          <button className="invisible p-2 m-2 font-bold text-white bg-red-500 rounded-lg shadow-md">
            Submit Quiz
          </button>
          <Timer onSubmit={submitHandler} second={seconds} minute={minutes} />
          <button
            onClick={submitHandler}
            className="p-2 m-2 font-bold text-white bg-red-500 rounded-lg shadow-md"
          >
            Submit Quiz
          </button>
        </div>
        <div className="p-2">
          <NavigationPanel
            onClick={(i) => navigationHandler(i)}
            questionsStatus={questionsStatus}
            currentQuestion={currentQuestion}
          />
        </div>
        <div className="p-2">
          <QuestionPanel
            question={questionsList[currentQuestion]}
            onSelect={(chosen) => selectionHandler(chosen)}
            chosen={questionsStatus[currentQuestion]["chosen"]}
          />
        </div>
        <div className="flex flex-wrap justify-between">
          <button
            onClick={prevQuestionHandler}
            className={`p-2  bg-green-500 rounded-lg shadow-md text-white font-bold m-2 ${
              currentQuestion === 0 ? "invisible" : "visible"
            }`}
          >
            Previous Question
          </button>

          <button
            onClick={markForReviewHandler}
            className="p-2 m-2 font-bold text-white bg-green-500 rounded-lg shadow-md"
          >
            Mark for Review
          </button>

          {questionsList.length !== currentQuestion + 1 && (
            <button
              onClick={nextQuestionHandler}
              className="p-2 m-2 font-bold text-white bg-green-500 rounded-lg shadow-md"
            >
              Next Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizPanel;

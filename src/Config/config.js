const questions = [
  {
    question: "Q1. What will happen when the timer above end?",
    options: [
      "Quiz will be submitted",
      "Page will reload",
      "Answers will be shown",
      "I'll wait and see",
    ],
  },
  {
    question: "Q2. What is the basic way to navigate to another question?",
    options: [
      "By using the action buttons below",
      "Wait for the timer to finish",
      "Click on mark for review",
      "I'm not sure",
    ],
  },
  {
    question:
      "Q3. How to navigate to another question that is not consecutive?",
    options: [
      "Click on the question number in top navigation panel",
      "Wait for the timer to finish",
      "Click on mark for review",
      "Click on action buttons",
    ],
  },
  {
    question: "Q4. What does green color in navigation bar means?",
    options: [
      "Answered question",
      "Marked for review",
      "Wrong answer",
      "Out of syllabus question",
    ],
  },
  {
    question: "Q5. What does violet color in navigation bar means?",
    options: [
      "Marked for review",
      "Answered question",
      "Wrong answer",
      "Out of syllabus question",
    ],
  },
  {
    question: "Q6. How do you submit quiz?",
    options: [
      "Submit button is at the top",
      "Submit button will be shown at the last question",
      "I will wait till timer is up",
      "I will close the browser",
    ],
  },
  {
    question: "Q7. What happens when you tab change to search for answers?",
    options: [
      "Quiz will be submitted",
      "My Computer will be  turned off",
      "My google account will shut down by google",
      "My college will suspend me",
    ],
  },
  {
    question: "Q8. When is it safe to close the browser",
    options: [
      "When the green screen appears telling my quiz is submitted",
      "Never",
      "When the quiz starts",
      "When i don't know the answer",
    ],
  },
  {
    question: "Q9. Where can you find the timer?",
    options: [
      "It is the Top Middle red color clock",
      "In my watch",
      "In my OS taskbar",
      "Using sun Clock",
    ],
  },
  {
    question: "Q10. How is this Quiz ?",
    options: ["It is awesome", "It is Good ", "It is Average", "It is bad"],
  },
];
const time = [2, 0]; //[min,sec]
module.exports = { questions, time };

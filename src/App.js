import "./App.css";
import QuizPanel from "./components/QuizPanel/QuizPanel";
import { useState } from "react";
import Start from "./components/QuizPanel/Start";
function App() {
  const [start, setStart] = useState(false);
  if (!start) return <Start onStart={() => setStart(true)} />;
  return <QuizPanel />;
}

export default App;

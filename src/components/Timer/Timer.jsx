import React from "react";
import { useState, useEffect } from "react";
function Timer({ onSubmit, second, minute }) {
  const [seconds, setSeconds] = useState(second);
  const [minutes, setMinutes] = useState(minute);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          onSubmit();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <div className="flex justify-end ">
      {minutes === 0 && seconds === 0 ? null : (
        <div className="text-red-500 text-2xl font-bold">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
      )}
    </div>
  );
}

export default Timer;

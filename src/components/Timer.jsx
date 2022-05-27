import { useEffect, useState } from "react";

export const Timer = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);
  const [isrunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isrunning) {
      var timer = setInterval(() => {
        setSec(sec + 1);
        if (sec === 4 && min === 4) {
          setSec(0);
          setMin(0);
          setHr(hr + 1);
        } else if (sec === 4) {
          setSec(0);
          setMin(min + 1);
        }
        // console.log(sec);
      }, 1000);
      return () => clearInterval(timer);
    }
  });
  const start = () => {
    isrunning ? setIsRunning(false) : setIsRunning(true);
    // setSec(sec+1)
  };
  const reset = () => {
    setIsRunning(false);
    setSec(0);
    setMin(0);
    setHr(0);
  };
  return (
    <div>
      <h1>Timer</h1>
      <h4>
        {hr < 10 ? "0" + hr : hr}:{min < 10 ? "0" + min : min}:
        {sec < 10 ? "0" + sec : sec}
      </h4>
      <button onClick={start}>{isrunning === true ? "Pause" : "Start"}</button>
      &nbsp;
      <button onClick={reset}>Reset</button>
      {/* <h4>{sec<10 ? "0" + sec : sec}</h4> */}
    </div>
  );
};

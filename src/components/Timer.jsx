import "./Timer.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MinSec(seconds) {
  const navigate = useNavigate();
  const handleNavigate = () =>{
    navigate('/timeUp');
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if (seconds > 0) {
    return (
      <>
        <div className="time_stamp">
          <h2>{minutes}</h2> <h3>min</h3> <h2>{remainingSeconds} </h2>
          <h3>sec</h3>
        </div>
      </>
    );
  } else {
    return (
      <>
      {handleNavigate()}
      </>
    );
  }
}

export default function Timer() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setSeconds("0");
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return <> {MinSec(seconds)}</>;
}

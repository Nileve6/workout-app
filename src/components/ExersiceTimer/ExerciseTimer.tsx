import React, { FC, useRef, useState, useEffect } from "react";
import "./ExerciseTimerStyles.scss";
import { VscDebugStart } from "react-icons/vsc";
import { MdOutlinePause } from "react-icons/md";
import Button from "../../common/Button/Button";
import LandingPage from "../LandingPage/LandingPage";
import { Counter } from "../../model";

interface TimerProps {
  counter: Counter;
}

const ExerciseTimer: FC<TimerProps> = ({ counter }) => {
  const { hold, rest, numberOfSets } = counter;
  const [seconds, setSeconds] = useState(hold);
  const [isHoldDone, setIsHoldDone] = useState(false);
  const [isRestDone, setIsRestDone] = useState(false);
  const [numOfSets, setNumOfSets] = useState(numberOfSets);
  const [pause, setPause] = useState(false);
  let intervalRef = useRef<null | NodeJS.Timeout>(null);

  const decreaseNum = () => setSeconds((prev) => (prev >= 0 ? prev - 1 : -1));

  useEffect(() => {
    if (seconds === -1) {
      if (isHoldDone) {
        setIsRestDone(true);
      } else {
        setIsHoldDone(true);
        setSeconds(rest);
      }
    }
    if (isRestDone) {
      setNumOfSets((prev) => (prev >= 0 ? prev - 1 : -1));
      setIsHoldDone(false);
      setIsRestDone(false);
      setSeconds(hold);
    }
    intervalRef.current = setInterval(decreaseNum, 1000);
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [seconds, isHoldDone, isRestDone, numberOfSets, counter, rest, hold]);

  const resetHandler = () => {
    setIsHoldDone(false);
    setIsRestDone(false);
    setNumOfSets(numOfSets);
    setSeconds(hold);
  };

  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };

  return (
    <>
      {numberOfSets > 0 ? (
        <section>
          <p>{isHoldDone ? "rest" : "hold"}</p>
          <p>time remaining</p>
          <p className="counter">{seconds}</p>
          <p>seconds</p>
          <div className="button-container">
            <Button onClick={handleClick}>
              {pause ? (
                <VscDebugStart size={40} />
              ) : (
                <MdOutlinePause size={40} />
              )}
            </Button>
            <Button onClick={resetHandler}>Reset</Button>
          </div>
          <p>sets remaining {numberOfSets}</p>
        </section>
      ) : (
        <LandingPage />
      )}
    </>
  );
};

export default ExerciseTimer;

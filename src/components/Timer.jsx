import React, { useState,useEffect } from "react";


const Timer=()=> {
const [isActive, setIsActive] = useState(false);
const [isPaused, setIsPaused] = useState(true);
const [time, setTime] = useState(0);

useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
    interval = setInterval(() => {
        setTime((time) => time + 10);}, 100);
    } 
    else {
    clearInterval(interval);
    }
    return () => {
    clearInterval(interval);
    };
}, [isActive, isPaused]);

const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
};

const handlePauseResume = () => {
    setIsPaused(!isPaused);
};

return (
    <div >
    <p>{(time/10)%100}</p>
    <button  onClick={handleStart}>start</button>
    <br />
    <button onClick={handlePauseResume} >{isPaused ? "Resume" : "Pause"}</button>
  </div>
);
}

export default Timer;
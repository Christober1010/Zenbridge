import React, { useRef, useState } from 'react'

function Counter() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);
  
    const startTimer = () => {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    };
  
    const pauseTimer = () => {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    };
  
    const stopTimer = () => {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      setTime(0);
    };
  return (
    <div>
        <h2>Stopwatch</h2>
      <p className='fw-bold fs-1'>Time: {time}s</p>
      {!isRunning ? (
        <button className='btn btn-success m-3' onClick={startTimer}>Start</button>
      ) : (
        <button className='btn btn-warning m-3' onClick={pauseTimer}>Pause</button>
      )}
      <button className='btn btn-danger m-3' onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default Counter


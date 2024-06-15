import React, { useEffect, useState } from 'react';
import "./TImerComponent.css"
import StopWaitButton from '../Buttons/StopWaitButton';
import { saveMessage } from '../../services/ChatApi';

const TimerComponent = ({ anniversaryDate='2020-01-01T00:00:00', setRefreshMessage, refreshMessage }) => {
  const [timeTogether, setTimeTogether] = useState({});
  const [isRunning, setIsRunning] = useState(true);


  useEffect(() => {
    const calculateTimeTogether = () => {
      const now = new Date();
      const startDate = new Date(anniversaryDate);
      const diff = now - startDate;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeTogether({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    };
    if (isRunning) {
      calculateTimeTogether();
      const interval = setInterval(calculateTimeTogether, 1000);
      return () => clearInterval(interval);
    }
  }, [anniversaryDate,isRunning]);

  const setStopButtonClick =()=>{
    "Hello sending request"
    const messageBody ={message: "Hello",type:"personal"}
    saveMessage(messageBody).then(()=>{
      setRefreshMessage(!refreshMessage);
      setIsRunning(false);
    })
  }

  return (
    // <div>
    //   <h1>Timer</h1>
    //   <p>Automatic Timer</p>
    //   <div>
    //     {timeTogether.years} years, {timeTogether.months} months, {timeTogether.days} days,{' '}
    //     {timeTogether.hours} hours, {timeTogether.minutes} minutes, {timeTogether.seconds} seconds
    //   </div>
    // </div>
    <div style={{display:"flex", justifyContent:"center"}}>
    <div className="main">
  <h1>Waiting Since Forever</h1>
  
  <div className="countdown">
    <div>
      <span className="number months" >{timeTogether.years*12}</span>
      <span>Months</span>
    </div>
    <div>
      <span className="number days" >{timeTogether.days}</span>
      <span>Days</span>
    </div>
    <div>
      <span className="number hours" >{timeTogether.hours}</span>
      <span>Hours</span>
    </div>
    <div>
      <span className="number minutes" >{timeTogether.minutes}</span>
      <span>Minutes</span>
    </div>
    <div>
      <span className="number seconds" >{timeTogether.seconds}</span>
      <span>Seconds</span>
    </div>
  </div>
  <StopWaitButton setStopButtonClick={setStopButtonClick}/>
</div>
</div>
  );
};

export default TimerComponent;

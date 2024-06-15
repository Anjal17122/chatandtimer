import React, { useCallback, useEffect, useState } from 'react'
import AnimatedBackground from './components/background/AnimatedBackground';
import './App.css'
import TimerComponent from './components/timer/TimerComponent';
import ChatBoxComponent from './components/chatbox/ChatBoxComponent';
import { increaseCount } from './services/ChatApi';

function App() {

  useEffect(()=>{
    increaseCount().then(()=>{

    })
  },[]);
  const [refreshMessage, setRefreshMessage] = useState(false);
  return(
    <>
<TimerComponent aniversaryDate={'2020-01-01T00:00:00'} refreshMessage={refreshMessage} setRefreshMessage={setRefreshMessage}/>    
    {/* <AnimatedFirework/> */}
    <AnimatedBackground/> 
 <ChatBoxComponent refreshMessage={refreshMessage} setRefreshMessage={setRefreshMessage}/>
{/* <Chat/> */}
    </>
  )
};


export default App

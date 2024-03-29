import { useState, useEffect} from 'react';
import ElapsedTime from './components/ElapsedTime';
import History from './components/History';
import Buttons from './components/Buttons';
import Footer from './components/Footer';


function App() {
  const [historyArr, setHistoryArr] = useState([0]);
  const [appStatus, setAppStatus] = useState(false);    //True: Working, False: Stopped
  const [timerTrigger, setTimerTrigger] = useState(false);
  const [timerID,setTimerID] = useState(null);
  
  function updateElapsedTime() {    
    let currentTime = historyArr[0] + 1;
    let nextHistoryArr = [...historyArr];
    nextHistoryArr[0] = currentTime;
    setHistoryArr(nextHistoryArr);
  }
  useEffect( () => {
    if (appStatus){
      updateElapsedTime();
    }
  },[timerTrigger,appStatus,updateElapsedTime])

  useEffect( () => {
  },[historyArr])
  function startTimer() {
    let nextHistoryArr = [0];
    setHistoryArr(nextHistoryArr);
    let nextStatus = true;
    setAppStatus(nextStatus);
    let timerID0 = setInterval(() => {
      setTimerTrigger((prevTimerTrigger) => !prevTimerTrigger);
    },1000);
    setTimerID(timerID0);
  }
  function stopTimer() {
    setAppStatus((prevAppStatus) => !prevAppStatus);    
    clearInterval(timerID);
  }
  function setTime() {
    const currentTime = historyArr[0];
    const nextHistoryArr = [currentTime,...historyArr];
    setHistoryArr(nextHistoryArr);
  }
  return (
    <div className="timer-app" id="timer-app">
      <History historyArr = {historyArr} />
      <ElapsedTime historyArr = {historyArr} />
      <Buttons appStatus = {appStatus} startTimer = {startTimer} stopTimer = {stopTimer} setTime = {setTime} />
      <Footer appStatus={appStatus} />
    </div>
  );  
}

export default App;

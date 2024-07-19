// import child components
import Timer from "./Timer";
import TimerHeader from "./TimerHeader";

import { useEffect, useState } from "react";


function App() {
  // declare timer stateful variable for hours, minutes, 
  // seconds and timer status
  const [ hours, setHoursValue ] = useState(0);
  const [ minutes, setMinutesValue ] = useState(0);
  const [ seconds, setSecondsValue ] = useState(0);
  const [ status, setStatus ] = useState("reset");

  // StartTimer()
  // used to start/resume the timer by checking if tiumer values are not
  // empty and then setting timer's status to "running"
  function startTimer() {
    if ( hours != 0 || minutes != 0 || seconds != 0 ) {
      setStatus("running");
    } else {
      alert("Enter hours, minutes or seconds to start the timer");
    }
  }

  // resetTimer()
  // used to reset timer back to default state
  function resetTimer() {
    setHoursValue(0)
    setMinutesValue(0)
    setSecondsValue(0)
    setStatus("reset")
  }

  // stopTimer()
  // used to stop timer for counting by setting timer's
  // state to "paused"
  function stopTimer() {
    setStatus("paused")
  }


  // main timer engine
  // works by creating and cleaning up and interval which holds 
  // the timer's loop, the interval works by removing 1 seconds
  // then minute then hour until it gets to zero or is paused/started
  useEffect( function() {

    let interval = setInterval( function() {
      
      if ( status == "running" ) {

        if ( seconds > 0 ) {
          setSecondsValue( ( currentSeconds ) => currentSeconds - 1 )
  
        } else if ( minutes > 0 ) {
          setSecondsValue( 59 )
          setMinutesValue( ( currentMinutes ) => currentMinutes - 1 )
  
        } else if ( hours > 0 ) {
          setSecondsValue( 59 )
          setMinutesValue( 59 )
          setHoursValue( ( currentHours ) => currentHours - 1 )
        }


        if ( hours == 0 && minutes == 0 && seconds == 0 ) {
          setStatus("reset");

          alert("Timer Done");
        }
      }
    }, 1000 )

    return function() {
      clearInterval( interval );
    }
  }, [ hours, minutes, seconds, status ]) 

  return (
    // app container
    <div className='app'>

      {/* timer header & status text */}
      <TimerHeader status={status}/>

      {/* countdown timer */}
      <Timer status={status} 
        hours={hours} 
        minutes={minutes} 
        seconds={seconds}
        setHours={ setHoursValue } 
        setMinutes={ setMinutesValue } 
        setSeconds={ setSecondsValue }
        handleReset={ resetTimer } 
        handleStart={ startTimer } 
        handleStop={ stopTimer }/>
    </div>
  )
}

export default App

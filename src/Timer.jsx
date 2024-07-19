// react icons import
import { BsPlayFill, BsPause, BsCircleFill, BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs';

import PropTypes from 'prop-types';


function Timer( props ) {
  return (
    <div className="timer">

        <div className="timer-inputs">

            {/* hours timer input */}
            <div className="timer-input">
                <button>
                    <BsCaretUpFill className={( props.status != "reset" ) ? "running" : "" }
                        onClick={ ()=>{ props.setHours( ( currentHours )=> currentHours + 1  ) } }/>
                </button>

                <input type="text" disabled value={props.hours}/>

                <button>
                    <BsCaretDownFill className={( props.status != "reset" ) ? "running" : "" }
                        onClick={ ()=>{ props.setHours( ( currentHours ) => ( currentHours >= 1 ) ? ( currentHours - 1  ) : 0 ) } }/>
                </button>
            </div>

            {/* input colon ( : ) divider */}
            <span className="colon-divider">
                :
            </span>

            {/* minutes timer input */}
            <div className="timer-input">
                <button>
                    <BsCaretUpFill className={( props.status != "reset" ) ? "running" : "" }
                        onClick={ ()=>{ props.setMinutes( ( currentMinutes )=> currentMinutes + 1  ) } }/>
                </button>

                <input type="text" disabled value={props.minutes}/>

                <button>
                    <BsCaretDownFill className={( props.status != "reset" ) ? "running" : "" }
                        onClick={ ()=>{ props.setMinutes( ( currentMinutes ) => ( currentMinutes >= 1 ) ? ( currentMinutes - 1  ) : 0 ) } }/>
                </button>
            </div>

            {/* input colon ( : ) divider */}
            <span className="colon-divider">
                :
            </span>

            {/* seconds timer input */}
            <div className="timer-input">
                <button>
                    <BsCaretUpFill className={( props.status != "reset" ) ? "running" : "" }
                        onClick={ ()=>{ props.setSeconds( ( currentSeconds )=> currentSeconds + 1  ) } }/>
                </button>

                <input type="text" disabled value={props.seconds}/>

                <button>
                    <BsCaretDownFill className={( props.status != "reset" ) ? "running" : "" }
                        onClick={ ()=>{ props.setSeconds( ( currentSeconds ) => ( currentSeconds >= 1 ) ? ( currentSeconds - 1  ) : 0 ) } }/>
                </button>
            </div>
        </div>




        <div className="action-buttons">
            
            {/* start button */}
            { ( props.status == "paused" || props.status == "reset" ) && 
                <button className='start-button' onClick={ props.handleStart }>
                    <span>Start</span>
                    <BsPlayFill/>
                </button> }
            
            {/* stop button */}
            { props.status == "running" && <button className='stop-button' onClick={ props.handleStop }>
                <span>Stop</span>
                <BsPause/>
            </button>}

            {/* reset button */}
            <button className='reset-button' onClick={ props.handleReset }>
                <span>Reset</span>
                <BsCircleFill/>
            </button>
        </div>
    </div>
  )
}


// prop types declaration for better props intellisense and props-typing
Timer.propTypes = {
    setHours: PropTypes.func.isRequired,
    setMinutes: PropTypes.func.isRequired,
    setSeconds: PropTypes.func.isRequired,
    hours: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    handleStart: PropTypes.func.isRequired,
    handleStop: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
}

export default Timer

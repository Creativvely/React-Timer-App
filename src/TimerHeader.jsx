// react icons import
import { BsStopwatch, BsGithub } from 'react-icons/bs';

import PropTypes from 'prop-types';

function TimerHeader( props ) {
    return ( 
        <div className="timer-header">

            {/* timer status text */}
            <h2>
                <BsStopwatch className='stopwatch-icon'/>

                {/* conditionally render header text based on timer status */}
                { props.status == "reset" && <span> timer </span> }
                { props.status == "running" && <span> timer running </span> }
                { props.status == "paused" && <span> timer paused </span> }
            </h2>


            {/* github repo link/icon */}
            <a href="">
                <BsGithub/>
            </a>
        </div>
    );
}

// prop types declaration for better props intellisense and props-typing
TimerHeader.propTypes = {
    status: PropTypes.string.isRequired
}

export default TimerHeader;
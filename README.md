# Alarm Spinner

Alarm.jsx:
// create state variable in order to check if the alarm is (ON || OFF)
const [isAlarmOn, setIsAlarmOn] = useState(false);

    // isAlarmOn is set to `TRUE` directly after the alarm has played ( alarm.play() )
    setIsAlarmOn(true);

    // isAlarmOn is set to `FALSE` directly after the alarm has stoped ( alarm.pause() )
    setIsAlarmOn(true);

    // I have also added and IPORTANT condition to prevernt an INFINIT_LOOP
    /*
    	Because This Condition :
    	`` if (alarmTime === `${hourDigital}:${minutesDigital} ${amPm}`) {...} ``
    	Will be `TRUE` for 1_minutes

    */

    // The Condition :
    if (!isAlarmOn) {
    	// Play And Stop Alarm
    }

AlarmOption.jsx
// Use this state variable to show the spinner
{ isAlarmOn && <RingLoader color="#3b3bbf" className="spinner" /> }

# Time Spinner

Alarm.jsx:
// create state variable in order to check if the TimeSpinner is (ON || OFF)
const [isTimeSpinnerOn, setIsTimeSpinnerOn] = useState(false);

#Where To Use
DigitalClock.jsx
// Use The Same format as for the `Alarm Spinner` but with the `isTimeSpinnerOn`
{ isTimeSpinnerOn && <RingLoader color="#3b3bbf" className="spinner" /> }

#How To Update The State
AnalogClock.jsx
// First I've declared a normal variable to store hoursAngle
let hoursAngle = hh + mm / 12;

    // And I've added a loop to decrease that variable `hoursAngle` by 360 if it is greater than 360
    while (hoursAngle >= 360) {
      		hoursAngle -= 360;
    	}

    // After I get the `hoursAngle` now its time to calculate the minutes angle to start the spinner
    // To calculate that Angle I use this var `angleToStartSpinner`
    let angleToStartSpinner = 180 - hoursAngle;

    // This var can be smaller than 0
    // In this case I reduce this angle from 360°
    if (angleToStartSpinner < 0) {
      		angleToStartSpinner += 360;
    	}

    // Finally I set the value of ( timeSpinner )
    // ( ss >= angleToStartSpinner ) will return `TRUE` when
    // the secondsAngle (ss) greater than or equal to the `angleToStartSpinner`
    setIsTimeSpinnerOn(ss >= angleToStartSpinner);

    // To reverse the `seconds hand` change from
    => setSeconds(`rotateZ( ${ss}deg )`);
    TO
    => setSeconds(`rotateZ( -${ss}deg )`);

import React, { useContext } from 'react';
import { AlarmContext } from '../context/Alarm';
import './digitalClock.css';
import { RingLoader } from 'react-spinners';

const DigitalClock = () => {
  const {
    hourDigital,
    minutesDigital,
    amPm,
    dayNow,
    monthNow,
    yearNow,
    isTimeSpinnerOn,
  } = useContext(AlarmContext);

  return (
    <section className="DigitalClock">
      {isTimeSpinnerOn && <RingLoader color="#3b3bbf" className="spinner" />}
      <div
        className={`clock_text_date_container ${isTimeSpinnerOn && 'disabled'}`}
      >
        <div className="clock-text">
          <div className="clock-text-hour">{`${hourDigital}:`}</div>
          <div className="clock-text-minutes">{minutesDigital}</div>
          <div className="clock-text-ampm">{amPm}</div>
        </div>
        <div className="clock-date">
          <span>{`${dayNow} `}</span>
          <span>{`${monthNow} , `}</span>
          <span>{yearNow}</span>
        </div>
      </div>
    </section>
  );
};

export default DigitalClock;

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Controls from './controls';

const getSeconds = (absTime) => absTime % 60;

const getMinutes = (absTime) => {
  const seconds = absTime % 60;
  return (absTime - seconds) / 60;
};

const Timer = ({ className, style }) => {
  const [absTime, setAbsTime] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [running, setRunning] = useState(false);
  const [inCountdown, setInCountdown] = useState(false);

  const countRef = useRef(absTime);
  countRef.current = absTime;

  const stop = () => {
    setRunning(false);
  };

  const start = () => {
    if (absTime === 0) {
      setAbsTime(-10);
      setInCountdown(true);
    }
    setIntervalId(setInterval(() => {
      if (countRef.current === -1) setInCountdown(false);
      if (countRef.current === 9) setRunning(false);
      setAbsTime(countRef.current + 1);
    }, 1000));
    setRunning(true);
  };

  const clear = () => setAbsTime(0);

  if (!running) clearInterval(intervalId);

  const seconds = getSeconds(absTime);
  const minutes = getMinutes(absTime);
  let secondsString = Math.abs(seconds);
  let minutesString = minutes;

  if (seconds < 10 && seconds > -10) secondsString = `0${secondsString}`;
  if (minutes < 10) minutesString = `0${minutesString}`;

  const time = `${minutesString}:${secondsString}`;
  return (
    <div className={`flex flex-column items-center justify-center bg-black tc ${className}`} style={style}>
      <div className="w-100 flex">
        <h3 className={`digital ma0 fw2 pt4 pl2 ${inCountdown ? 'dark-red' : 'white'}`} style={{ fontSize: '150px', visibility: inCountdown ? 'visible' : 'hidden' }}>
          -
        </h3>
        <h3 className={`digital white ma0 fw2 pt4 pr5 ${inCountdown ? 'dark-red' : 'white'}`} style={{ fontSize: '150px' }}>
          {time}
        </h3>
      </div>
      <Controls onPlay={start} onPause={stop} onReset={clear} running={running} />
    </div>
  );
};


Timer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

Timer.defaultProps = {
  className: '',
  style: {},
};

export default Timer;

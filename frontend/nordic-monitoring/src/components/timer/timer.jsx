/* eslint-disable react/jsx-one-expression-per-line */
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
      if (countRef.current >== 5939) setRunning(false);
      setAbsTime(countRef.current + 1);
    }, 1000));
    setRunning(true);
  };

  const clear = () => {
    setRunning(false);
    setInCountdown(false);
    setAbsTime(0);
  };

  if (!running) clearInterval(intervalId);

  const seconds = getSeconds(absTime);
  const minutes = getMinutes(absTime);
  let secondsString = Math.abs(seconds);
  let minutesString = minutes;

  if (seconds < 10 && seconds > -10) secondsString = `0${secondsString}`;
  if (minutes < 10) minutesString = `0${minutesString}`;

  return (
    <div className={`flex-ns flex-column items-center justify-center bg-black tc ${className}`} style={style}>
      <div className="w-100 flex items-center" style={{ flex: 5 }}>
        <div className={`digital w-100 white ma0 tc fw2 tr f1 ${inCountdown ? 'dark-red' : 'white'}`} style={{ fontSize: '12em' }}>
          {minutesString}:{secondsString}
        </div>
      </div>
      <Controls
        onPlay={start}
        onPause={stop}
        onReset={clear}
        running={running}
        style={{ flex: 1 }}
      />
    </div>
  );
};

Timer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

Timer.defaultProps = {
  className: '',
  style: { flex: 1 },
};

export default Timer;

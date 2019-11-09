import React from 'react';
import PropTypes from 'prop-types';
import LinedButton from './linedButton';

const Controls = ({
  className, style, onPlay, onPause, onReset, running,
}) => (
  <div className={`flex w-100 ${className}`} style={style}>
    {running ? (
      <LinedButton className="w-100" onClick={onPause} disabled={!running}>
        PAUSE
      </LinedButton>
    ) : (
      <LinedButton className="w-100" onClick={onPlay} disabled={running}>
        PLAY
      </LinedButton>
    )}
    <LinedButton className="w-100" onClick={onReset} disabled={running}>
      RESET
    </LinedButton>
  </div>
);

Controls.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onReset: PropTypes.func,
  running: PropTypes.bool,
};

Controls.defaultProps = {
  className: '',
  style: {},
  onPlay: () => {},
  onPause: () => {},
  onReset: () => {},
  running: false,
};

export default Controls;

import React from 'react';
import PropTypes from 'prop-types';
import Button from './LinedButton';

const Controls = ({
  className, style, onPlay, onPause, onReset, running,
}) => (
  <div className={`flex w-100 ${className}`} style={style}>
    {running ? (
      <Button className="w-100" onClick={onPause}>
        PAUSE
      </Button>
    ) : (
      <Button className="w-100" onClick={onPlay}>
        PLAY
      </Button>
    )}
    <Button className="w-100" onClick={onReset} disabled={running}>
      RESET
    </Button>
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

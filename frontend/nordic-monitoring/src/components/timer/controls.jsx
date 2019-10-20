import React from 'react';
import PropTypes from 'prop-types';
import { MdPlayArrow, MdPause, MdClear } from 'react-icons/md';
import Button from '../workout/IconButton';

const Controls = ({
  className, style, onPlay, onPause, onReset, running,
}) => (
  <div className={`flex justify-end w-100 ${className}`} style={style}>
    {running ? (
      <Button onClick={onPause}>
        <MdPause />
      </Button>
    ) : (
      <Button onClick={onPlay}>
        <MdPlayArrow />
      </Button>
    )}
    <Button className={`${running ? 'light-gray' : ''}`} onClick={onReset} disabled={running}>
      <MdClear />
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

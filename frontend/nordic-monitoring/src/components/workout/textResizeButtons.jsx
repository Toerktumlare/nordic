import React from 'react';
import PropTypes from 'prop-types';
import { MdRemoveCircleOutline, MdControlPoint } from 'react-icons/md';
import Button from './IconButton';

const TextResizeButtons = ({
  className, onClickPlus, onClickMinus, disabled, hidden,
}) => (
  <div className={`${hidden ? 'dn' : ''} ${className}`}>
    <Button onClick={onClickMinus} disabled={disabled}>
      <MdRemoveCircleOutline />
    </Button>
    <Button onClick={onClickPlus} disabled={disabled}>
      <MdControlPoint />
    </Button>
  </div>
);

TextResizeButtons.defaultProps = {
  className: '',
  onClickPlus: () => {},
  onClickMinus: () => {},
  disabled: false,
  hidden: false,
};

TextResizeButtons.propTypes = {
  className: PropTypes.string,
  onClickPlus: PropTypes.func,
  onClickMinus: PropTypes.func,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
};

export default TextResizeButtons;

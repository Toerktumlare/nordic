import React from 'react';
import PropTypes from 'prop-types';
import { MdRemoveCircleOutline, MdControlPoint } from 'react-icons/md';
import Button from './IconButton';

const TextResizeButtons = ({
  className, onClickPlus, onClickMinus, disabled, hidden,
}) => (
  <div className={`${hidden ? 'dn' : 'flex flex-column'} ${className}`}>
    <Button onClick={onClickPlus} disabled={disabled}>
      <MdControlPoint />
    </Button>
    <Button onClick={onClickMinus} disabled={disabled}>
      <MdRemoveCircleOutline />
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

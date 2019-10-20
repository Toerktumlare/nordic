import React from 'react';
import PropTypes from 'prop-types';

const SelectionMenuButton = ({
  className, text, onClick, disabled,
}) => (
  <button
    type="button"
    className={`ba b--black shadow-1 no-underline near-black ma2 tc pa br3 ${className} ${disabled ? '' : 'dim'}`}
    onClick={onClick}
    disabled={disabled}
  >
    <h1 className={`center futura ttu tracked-mega bold ${disabled ? 'light-gray' : ''}`}>
      {text}
    </h1>
  </button>
);

SelectionMenuButton.defaultProps = {
  className: '',
  text: '',
  onClick: () => {},
  disabled: false,
};

SelectionMenuButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default SelectionMenuButton;

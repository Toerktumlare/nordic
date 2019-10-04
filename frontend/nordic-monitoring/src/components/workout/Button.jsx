import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({
  className, children, onClick, disabled, hidden,
}) => (
  <button
    type="button"
    className={`no-underline near-black bg-animate hover-bg-gray inline-flex items-center ma2 tc br2 pa2 ${className}`}
    onClick={onClick}
    disabled={disabled}
    style={{ visibility: hidden ? 'hidden' : 'visible' }}
  >
    { children }
  </button>
);

IconButton.defaultProps = {
  className: '',
  onClick: () => {},
  disabled: false,
  hidden: false,
};

IconButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
};

export default IconButton;

import React from 'react';
import PropTypes from 'prop-types';

const LinedButton = ({
  className, children, onClick, disabled, hidden,
}) => (
  <button
    type="button"
    className={`no-underline white bg-transparent bg-animate ma1 ba bw1 b--white-70 bw0 ${className} ${disabled ? 'o-50' : ''}`}
    onClick={onClick}
    disabled={disabled}
    style={{ visibility: hidden ? 'hidden' : 'visible' }}
  >
    <h5 className={`center futura pa1 ma1 ${disabled ? 'o-50' : ''}`}>
      {children}
    </h5>
  </button>
);

LinedButton.defaultProps = {
  className: '',
  onClick: () => {},
  disabled: false,
  hidden: false,
};

LinedButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
};

export default LinedButton;

import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ className, children, onClick }) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <button
    type="button"
    className={`no-underline near-black bg-animate hover-bg-gray inline-flex items-center ma2 tc br2 pa2 ${className}`}
    onClick={onClick}
  >
    { children }
  </button>
);

IconButton.defaultProps = {
  className: '',
  onClick: {},
};

IconButton.propTypes = {
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default IconButton;

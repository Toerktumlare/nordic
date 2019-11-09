import React from 'react';
import { PropTypes } from 'prop-types';

const ColoredBackground = ({ children, color }) => (
  <div className="h-100-ns w-100 flex flex-column flex-row-ns pa2-ns" style={{ position: 'absolute', backgroundColor: color }}>
    { children }
  </div>
);

ColoredBackground.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

ColoredBackground.defaultProps = {
  color: '#FFFFFF',
};

export default ColoredBackground;

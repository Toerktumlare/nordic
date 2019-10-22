import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({ className, text, style }) => (
  <div className={`flex items-center justify-center bg-black tc ${className}`} style={style}>
    <h3 className="futura blue v-btm ma0 pa2 f4 h-copy">
      {text}
    </h3>
  </div>
);

InfoBar.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.shape({}),
};

InfoBar.defaultProps = {
  text: '',
  className: '',
  style: {},
};

export default InfoBar;

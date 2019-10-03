import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({ className, text }) => (
  <div className={`bg-black tc ${className}`}>
    <h3 className="code blue v-btm ma0 pa2 f3 h-copy">
      {text}
    </h3>
  </div>
);

InfoBar.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

InfoBar.defaultProps = {
  text: '',
  className: '',
};

export default InfoBar;

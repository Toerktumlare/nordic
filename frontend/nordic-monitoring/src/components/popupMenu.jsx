/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PopUpMenu = ({ className }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const outHover = () => {
    setHover(false);
  };

  return (
    <div
      className={`relative ${hover ? 'db' : 'dib'} ${className}`}
      onMouseOver={onHover}
      onMouseOut={outHover}
    >
      <div
        className="w-100 relative pa3 futura f6 "
        onMouseOver={onHover}
        onMouseOut={outHover}
      >
        Menu
      </div>
      <div className={`w-100 absolute pa2 z-1 ${hover ? 'db' : 'dn'} ba b--light-gray`}>
        <a className="db pa2 futura link dim dark-gray f7" href="#">
          Flush
        </a>
        <a className="db pa2 futura link dim dark-gray f7" href="#">
          About
        </a>
      </div>
    </div>
  );
};

PopUpMenu.propTypes = {
  className: PropTypes.string,
};

PopUpMenu.defaultProps = {
  className: '',
};

export default PopUpMenu;

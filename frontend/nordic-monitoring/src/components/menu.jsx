/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Menu = ({ className, children }) => {
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
        {children}
      </div>
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Menu.defaultProps = {
  className: 'w-100',
};

export default Menu;

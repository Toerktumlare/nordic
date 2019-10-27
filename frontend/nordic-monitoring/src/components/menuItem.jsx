/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

const menuItem = ({ onClick, children }) => (
  <div>
    <a className="db pa2 futura link dim dark-gray f7" href="" onClick={onClick}>
      { children }
    </a>
  </div>
);

menuItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

menuItem.defaultProps = {
  onClick: () => {},
};

export default menuItem;

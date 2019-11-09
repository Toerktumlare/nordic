import React from 'react';
import { PropTypes } from 'prop-types';

const SideBarSection = ({ children }) => (
  <div className="flex flex-column pl2-ns" style={{ flex: 1 }}>
    { children }
  </div>
);

SideBarSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideBarSection;

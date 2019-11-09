import React from 'react';
import { PropTypes } from 'prop-types';

const MainSection = ({ children }) => (
  <div className="h-100 w-100 pr2-ns flex justify-center align-center" style={{ flex: 2 }}>
    { children }
  </div>
);

MainSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainSection;

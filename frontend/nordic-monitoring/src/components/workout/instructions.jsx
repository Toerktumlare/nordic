import React from 'react';
import PropTypes from 'prop-types';

const Instructions = ({ className, values, hidden }) => {
  let instructions = null;
  if (values !== undefined && !hidden) {
    instructions = values.map((value) => value.split('\n')
      // eslint-disable-next-line react/no-array-index-key
      .map((object, j) => <div className="georgia pr2 pb1 f7" key={j}>{object}</div>));
  }

  return (
    <div className={`pb2 ${className}`}>
      {instructions}
    </div>
  );
};

Instructions.defaultProps = {
  className: '',
  values: [],
  hidden: false,
};

Instructions.propTypes = {
  className: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
  hidden: PropTypes.bool,
};

export default Instructions;

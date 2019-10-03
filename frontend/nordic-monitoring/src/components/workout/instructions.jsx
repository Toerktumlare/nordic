import React from 'react';
import PropTypes from 'prop-types';

const Instructions = ({ className, values }) => {
  let instructions = <div>No instructions today</div>;
  if (values !== undefined) {
    instructions = values.map((value) => value.split('\n')
      // eslint-disable-next-line react/no-array-index-key
      .map((object, j) => <div className="pr2 pb1 f7" key={j}>{object}</div>));
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
};

Instructions.propTypes = {
  className: PropTypes.string,
  values: PropTypes.arrayOf,
};

export default Instructions;

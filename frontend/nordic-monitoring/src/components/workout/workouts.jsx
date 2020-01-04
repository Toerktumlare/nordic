/* eslint-disable prefer-destructuring */
import React from 'react';
import PropTypes from 'prop-types';

const Workouts = ({ className, workouts, fontClass }) => {
  let workoutValue = <div>No workout registered today</div>;

  if (workouts !== 'undefined') {
    workoutValue = workouts.map((workout) => (
      <div className="pb3">
        {
          workout.split('\n')
            // eslint-disable-next-line react/no-array-index-key
            .map((text, j) => <div className={`georgia lh-title pb2 pb1-ns ${fontClass}`} key={j}>{text}</div>)
        }
      </div>
    ));
  }

  return (
    <div className={`mb2  ${className}`}>
      {workoutValue}
    </div>
  );
};

Workouts.defaultProps = {
  className: '',
  workouts: [],
  fontClass: 'f5',
};

Workouts.propTypes = {
  className: PropTypes.string,
  workouts: PropTypes.arrayOf(PropTypes.string),
  fontClass: PropTypes.string,
};

export default Workouts;

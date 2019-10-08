import React from 'react';
import PropTypes from 'prop-types';
// import Textfit from 'react-textfit';

// const inlineStyle = {
//   height: '400px',
// };

const WorkoutDay = ({ className, workouts }) => {
  let workoutValue = <div>No workout registered today</div>;
  if (workouts !== 'undefined') {
    workoutValue = workouts.map((workout) => workout.split('\n')
      // eslint-disable-next-line react/no-array-index-key
      .map((text, j) => <div className="georgia pb3" key={j}>{text}</div>));
  }

  return (
    <div className={`${className}`}>
      {/* <Textfit max={30} style={inlineStyle}> */}
      {workoutValue}
      {/* </Textfit> */}
    </div>
  );
};

WorkoutDay.defaultProps = {
  className: '',
  workouts: [],
};

WorkoutDay.propTypes = {
  className: PropTypes.string,
  workouts: PropTypes.arrayOf(PropTypes.string),
};

export default WorkoutDay;

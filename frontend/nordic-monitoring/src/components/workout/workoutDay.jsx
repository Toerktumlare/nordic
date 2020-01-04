import React from 'react';
import { PropTypes } from 'prop-types';
import Header from './header';
import Workouts from './workouts';
import Instructions from './instructions';

class WorkoutDay extends React.Component {
  constructor(props) {
    super(props);

    const { textSize } = this.props;

    this.state = {
      textSize,
    };
  }

  render() {
    const {
      className,
      workoutName,
      timestamp,
      workouts,
      instructions,
    } = this.props;

    // eslint-disable-next-line no-unused-vars
    const { textSize } = this.state;

    return (
      <div className={`flex flex-column justify-between overflow-auto h-100 w-100 ${className}`}>
        <Header className="flex justify-between pl4" name={workoutName} timestamp={timestamp} />
        <Workouts className="pl4 pr4" workouts={workouts} />
        <Instructions className="pl4 pb2 pr4 dn db-ns" values={instructions} />
      </div>
    );
  }
}


WorkoutDay.propTypes = {
  className: PropTypes.string,
  textSize: PropTypes.string,
  workoutName: PropTypes.string,
  timestamp: PropTypes.number,
  workouts: PropTypes.arrayOf(PropTypes.string),
  instructions: PropTypes.arrayOf(PropTypes.string),
};

WorkoutDay.defaultProps = {
  className: '',
  textSize: '12',
  workoutName: '',
  timestamp: 0,
  workouts: [],
  instructions: [],
};

export default WorkoutDay;

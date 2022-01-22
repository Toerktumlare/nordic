import React from 'react';
import { PropTypes } from 'prop-types';
import Header from './header';
import Workouts from './workouts';
import Instructions from './instructions';

const getFontClass = (workouts) => {
  let rows = 0;
  workouts.forEach((section) => {
    rows += section.split('\n').length;
  });

  if (rows < 8) return 1;
  if (rows < 9) return 1;
  if (rows < 14) return 1;
  if (rows < 17) return 2;
  if (rows < 17) return 3;
  if (rows < 20) return 3;
  if (rows < 24) return 3;
  return 0;
};

class WorkoutDay extends React.Component {
  constructor(props) {
    super(props);

    const { workouts } = this.props;

    const fontClasses = [
      'f4 f1-ns',
      'f4 f2-ns',
      'f5 f3-ns',
      'f5 f4-ns',
      'f5 f5-ns',
      'f5 f6-ns',
    ];

    const index = getFontClass(workouts);

    this.state = {
      index,
      fontClasses,
    };
  }

  onClickPlus = () => {
    let { index } = this.state;
    if (index === 0) {
      return;
    }
    this.setState({ index: index -= 1 });
  };

  onClickMinus = () => {
    let { index } = this.state;
    const { fontClasses } = this.state;
    if (index + 1 === fontClasses.length) {
      return;
    }
    this.setState({ index: index += 1 });
  };

  render() {
    const {
      className,
      workoutName,
      timestamp,
      workouts,
      instructions,
    } = this.props;

    const { fontClasses, index } = this.state;

    return (
      <div className={`flex flex-column justify-between overflow-auto h-100 w-100 ${className}`}>
        <Header className="flex justify-between pl4" name={workoutName} timestamp={timestamp} onClickPlus={this.onClickPlus} onClickMinus={this.onClickMinus} />
        <Workouts className="pl4 pr4" workouts={workouts} fontClass={fontClasses[index]} />
        <Instructions className="pl4 pb2 pr4 dn db-ns" values={instructions} />
      </div>
    );
  }
}

WorkoutDay.propTypes = {
  className: PropTypes.string,
  workoutName: PropTypes.string,
  timestamp: PropTypes.number,
  workouts: PropTypes.arrayOf(PropTypes.string),
  instructions: PropTypes.arrayOf(PropTypes.string),
};

WorkoutDay.defaultProps = {
  className: '',
  workoutName: '',
  timestamp: 0,
  workouts: [],
  instructions: [],
};

export default WorkoutDay;

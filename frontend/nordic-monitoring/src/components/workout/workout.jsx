import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import WorkoutTypes from '../../constants/WorkoutTypes';
import Footer from './footer';
import WorkoutDay from './workoutDay';

class Workout extends React.Component {
  static genWorkoutDays(weeklyWorkouts) {
    return weeklyWorkouts.map((workoutWeek) => {
      const { name, workoutDays } = workoutWeek;
      const workoutName = WorkoutTypes[name];

      const dayComponents = workoutDays.map((workoutDay) => {
        const { instructions, workouts, date } = workoutDay;
        return (
          <>
            <WorkoutDay
              workoutName={workoutName}
              timestamp={date}
              workouts={workouts}
              instructions={instructions}
            />
          </>
        );
      });
      return dayComponents;
    });
  }

  constructor(props) {
    super(props);

    const { currentIndex } = this.props;

    this.state = {
      currentIndex,
    };
  }

  handleForwardClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ currentIndex: prevState.currentIndex + 1 }));
  }

  handleBackwardClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ currentIndex: prevState.currentIndex - 1 }));
  }

  handleMenuClick = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { className, data } = this.props;
    const { currentIndex } = this.state;
    const dayComponents = Workout.genWorkoutDays(data);

    let selectedWorkoutDay;
    if (dayComponents.length !== 0) {
      selectedWorkoutDay = dayComponents[0][currentIndex];
    }
    const isLeftHidden = currentIndex === 0;
    const isRightHidden = currentIndex === dayComponents[0].length - 1;

    return (
      <div className={`w-100 h-100 flex flex-column justify-between ${className}`}>
        {selectedWorkoutDay}
        <Footer
          onRight={this.handleForwardClick}
          onLeft={this.handleBackwardClick}
          onMenu={this.handleMenuClick}
          hideLeftButton={isLeftHidden}
          hideRightButton={isRightHidden}
        />
      </div>
    );
  }
}

Workout.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  currentIndex: PropTypes.number,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

Workout.defaultProps = {
  className: '',
  data: [],
  currentIndex: moment().isoWeekday() - 1,
  history: {},
};

export default withRouter(Workout);

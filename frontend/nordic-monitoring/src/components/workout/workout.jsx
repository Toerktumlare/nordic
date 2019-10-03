import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import WorkoutDay from './workoutDay';
import Instructions from './instructions';
import Header from './header';
import WorkoutTypes from '../../constants/WorkoutTypes';
import Footer from './footer';

// const inlineStyle = {
//   flex: '1'
// };

class Workout extends React.Component {
  constructor(props) {
    super(props);

    const {
      currentIndex,
    } = this.props;

    this.state = {
      currentIndex,
    };
  }

  // componentDidUpdate(prevProps) {
  //   console.log('workout did update');
  //   const { workouts } = this.props;
  //   if (prevProps.workouts.length !== workouts.length) {
  //     console.log('setting new workout');
  //     // eslint-disable-next-line react/no-did-update-set-state
  //     this.setState({
  //       workoutDays: this.genWorkoutDays(workouts),
  //     });
  //   }
  // }

    handleForwardClick = (e) => {
      e.preventDefault();
      this.setState((prevState) => ({ currentIndex: prevState.currentIndex + 1 }));
    }

    handleBackwardClick = (e) => {
      e.preventDefault();
      this.setState((prevState) => ({ currentIndex: prevState.currentIndex - 1 }));
    }

    genWorkoutDays = (weeklyWorkouts) => weeklyWorkouts.flatMap((workoutWeek) => {
      const { name, workoutDays } = workoutWeek;
      const workoutName = WorkoutTypes[name];

      return workoutDays.map((workoutDay) => {
        const { instructions, workouts, date } = workoutDay;
        return (
          <>
            <div className="flex flex-column justify-between overflow-auto h-100">
              <Header className="pl4" name={workoutName} timestamp={date} />
              <WorkoutDay className="pl4 pr4" workouts={workouts} />
              <Instructions className="pl4 pb2 pr4" values={instructions} />
            </div>
          </>
        );
      });
    });

    render() {
      const { className, workouts, currentIndex } = this.props;
      const workoutDays = this.genWorkoutDays(workouts);

      let selectedWorkoutDay;
      if (workoutDays.length !== 0) {
        selectedWorkoutDay = workoutDays[currentIndex];
      }

      console.log('rendering workout');

      return (
        <div className={`bg-white flex flex-column justify-between ba bw3 b--yellow h-100 ${className}`}>
          {selectedWorkoutDay}
          <Footer
            className="flex-0"
            onForward={this.handleForwardClick}
            onBackward={this.handleBackwardClick}
          />
        </div>
      );
    }
}

Workout.propTypes = {
  className: PropTypes.string,
  workouts: PropTypes.arrayOf(PropTypes.object),
  currentIndex: PropTypes.number,
};


Workout.defaultProps = {
  className: '',
  workouts: [],
  currentIndex: moment().isoWeekday() - 1,
};

export default Workout;

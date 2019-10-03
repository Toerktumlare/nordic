import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getWorkouts } from '../../store/actions/workoutsActions';
import WorkoutDay from './workoutDay';
import Instructions from './instructions';
import Header from './header';
import WorkoutTypes from '../../constants/WorkoutTypes';
import Footer from './footer';

class Workout extends React.Component {
  static genWorkoutDays = (weeklyWorkouts) => weeklyWorkouts.flatMap((workoutWeek) => {
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

  constructor(props) {
    super(props);

    const { currentIndex, data } = this.props;
    const workoutWeek = Workout.genWorkoutDays(data);

    this.state = {
      currentIndex,
      workoutWeek,
    };
  }

  componentDidMount() {
    const { fetchWorkouts } = this.props;
    fetchWorkouts();
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      workoutWeek: Workout.genWorkoutDays(nextProps.data),
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

  render() {
    const { className, currentIndex } = this.props;
    const { workoutWeek } = this.state;
    let selectedWorkoutDay;
    if (workoutWeek.length !== 0) {
      selectedWorkoutDay = workoutWeek[currentIndex];
    }

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
  data: PropTypes.arrayOf(PropTypes.object),
  currentIndex: PropTypes.number,
  fetchWorkouts: PropTypes.func,
};

Workout.defaultProps = {
  className: '',
  data: [],
  currentIndex: moment().isoWeekday() - 1,
  fetchWorkouts: () => {},
};

function mapStateToProps(state) {
  return {
    data: state.wods,
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchWorkouts: () => dispatch(getWorkouts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Workout);

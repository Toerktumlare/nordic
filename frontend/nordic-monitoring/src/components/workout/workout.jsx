import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { setWorkouts } from '../../store/actions/workoutsActions';
import WorkoutDay from './workoutDay';
import Instructions from './instructions';
import Header from './header';
import WorkoutTypes from '../../constants/WorkoutTypes';
import Footer from './footer';

class Workout extends React.Component {
  static genWorkoutDays(weeklyWorkouts) {
    return weeklyWorkouts.flatMap((workoutWeek) => {
      const { name, workoutDays } = workoutWeek;
      const workoutName = WorkoutTypes[name];

      return workoutDays.map((workoutDay) => {
        const { instructions, workouts, date } = workoutDay;
        const noInstructions = instructions.length === 0;
        return (
          <>
            <div className="flex flex-column justify-between overflow-auto h-100">
              <Header className="pl4" name={workoutName} timestamp={date} />
              <WorkoutDay className="pl4 pr4" workouts={workouts} />
              <Instructions className="pl4 pb2 pr4" values={instructions} hidden={noInstructions} />
            </div>
          </>
        );
      });
    });
  }

  constructor(props) {
    super(props);

    const { currentIndex, data } = this.props;
    const workoutWeek = Workout.genWorkoutDays(data);

    this.state = {
      currentIndex,
      workoutWeek,
      workoutEvents: new EventSource('/api/workouts'),
    };
  }

  componentDidMount() {
    const { workoutEvents } = this.state;
    workoutEvents.addEventListener('message', this.handleWorkoutsEvent);
  }

  componentWillUnmount() {
    const { workoutEvents } = this.state;
    workoutEvents.removeEventListener('message', this.handleWorkoutsEvent);
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      workoutWeek: Workout.genWorkoutDays(nextProps.data),
    };
  }

  handleWorkoutsEvent = (e) => {
    const { addWorkouts } = this.props;
    const data = JSON.parse(e.data);
    addWorkouts(data);
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
    const { className } = this.props;
    const { workoutWeek, currentIndex } = this.state;
    let selectedWorkoutDay;
    if (workoutWeek.length !== 0) {
      selectedWorkoutDay = workoutWeek[currentIndex];
    }
    const isLeftHidden = currentIndex === 0;
    const isRightHidden = currentIndex === workoutWeek.length - 1;

    return (
      <div className={`bg-white flex flex-column justify-between ba bw3 b--yellow ${className}`}>
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
  addWorkouts: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

Workout.defaultProps = {
  className: '',
  data: [],
  currentIndex: moment().isoWeekday() - 1,
  addWorkouts: () => {},
  history: {},
};

function mapStateToProps(state) {
  return {
    data: state.workouts.wods,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addWorkouts: (workouts) => dispatch(setWorkouts(workouts)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Workout));

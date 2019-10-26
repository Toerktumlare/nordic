import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Workout from './workout';
import { setWorkouts } from '../../store/actions/workoutsActions';

class WorkoutScreen extends React.Component {
  constructor(props) {
    super(props);

    const { data } = this.props;

    this.state = {
      workoutEvents: new EventSource('/api/workouts'),
      data,
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
      data: nextProps.data,
    };
  }

  handleWorkoutsEvent = (e) => {
    const { addWorkouts } = this.props;
    const data = JSON.parse(e.data);
    addWorkouts(data);
  }

  render() {
    const { className } = this.props;
    const { data } = this.state;
    return (
      <div className={`fl w-100 bg-white flex justify-between items-center ba bw3 b--yellow ${className}`}>
        {!data ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            timeout={30000}
          />
        ) : (
          <Workout data={data} />
        )}
      </div>
    );
  }
}

WorkoutScreen.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  addWorkouts: PropTypes.func,
};

WorkoutScreen.defaultProps = {
  data: undefined,
  className: '',
  addWorkouts: () => {},
};

function mapStateToProps(state) {
  return {
    data: state.workouts.wods,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addWorkouts: (data) => dispatch(setWorkouts(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkoutScreen);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Workout from './workout';
import { setWorkouts } from '../../store/actions/workoutsActions';

class WorkoutScreen extends React.Component {
  constructor(props) {
    super(props);

    const { data, eventUrl } = this.props;

    this.state = {
      workoutEvents: new EventSource(eventUrl),
      data,
    };
  }

  componentDidMount() {
    const { workoutEvents } = this.state;
    workoutEvents.addEventListener('message', this.handleWorkoutsEvent);
  }

  componentWillUnmount() {
    const { workoutEvents } = this.state;
    workoutEvents.close();
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
    const { className, color } = this.props;
    const { data } = this.state;
    return (
      <div className={`w-100 bg-white flex justify-center items-center ba bw3 ${className}`} style={{ borderColor: color }}>
        {!data ? (
          <div>
            <Loader
              type="ThreeDots"
              color="#357edd"
            />
          </div>
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
  eventUrl: PropTypes.string,
  style: PropTypes.shape({
    borderColor: PropTypes.string,
  }),
  color: PropTypes.string,
};

WorkoutScreen.defaultProps = {
  data: undefined,
  className: '',
  addWorkouts: () => {},
  eventUrl: '',
  style: {},
  color: '#000000',
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

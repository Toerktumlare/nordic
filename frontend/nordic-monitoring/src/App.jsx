/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from 'react-redux';
import Clock from './components/clock/clock';
import InfoBar from './components/infoBar/infoBar';
import Workout from './components/workout/workout';
import { getWorkouts } from './store/actions/workoutsActions';

const body = {
  backgroundColor: '#737373',
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Fetching workouts');
    const { fetchWorkouts } = this.props;
    fetchWorkouts();
  }

  render() {
    const { wods } = this.props;
    const filteredWorkouts = wods.filter((workoutType) => workoutType.name === 'DAGENS_PASS');
    return (
      <div className="fl w-100 h-100" style={body}>
        <div className="fl w-70 h-100">
          <Workout workouts={filteredWorkouts} />
        </div>
        <div className="fl w-30 h-100 pa1">
          <div className="flex flex-column">
            <Clock className="mb2" />
            <InfoBar className="mb2" text="Dagens Pass - 07:00" />
            <div className="mr2">
              Attendee component
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fetchWorkouts: PropTypes.func,
};

App.defaultProps = {
  fetchWorkouts: () => {},
};

function mapStateToProps(state) {
  return {
    wods: state.wods,
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchWorkouts: () => dispatch(getWorkouts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

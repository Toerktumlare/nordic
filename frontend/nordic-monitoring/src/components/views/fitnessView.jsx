import React from 'react';
import './views.css';
import Timer from '../timer/timer';
import Participants from '../participants/participants';
import WorkoutScreen from '../workout/workoutScreen';

const inlineStyle = {
  container: {
    position: 'absolute',
    backgroundColor: '#737373',
  },
  clock: {
    flex: 1,
  },
  participants: {
    flex: 4,
  },
};

const FitnessView = () => (
  <div className="w-100 h-100-ns flex flex-column flex-row-ns pa2-ns" style={inlineStyle.container}>
    <WorkoutScreen eventUrl="/api/workouts/fitness" className="pr2-ns" style={{ borderColor: '#00b300' }} />
    <div className="flex flex-column justify-around-ns content-stretch-ns pl2-ns">
      <Timer className="mb2 dn" style={inlineStyle.clock} />
      <Participants eventUrl="/api/participants/fitness" style={inlineStyle.participants} />
    </div>
  </div>
);

export default FitnessView;
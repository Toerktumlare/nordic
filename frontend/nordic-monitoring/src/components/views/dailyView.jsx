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

const DailyView = () => (
  <div className="w-100 h-100-ns flex flex-column flex-row-ns pa2-ns" style={inlineStyle.container}>
    <WorkoutScreen eventUrl="/api/workouts/dagens" className="pr2-ns b--yellow" />
    <div className="flex flex-column justify-around-ns content-stretch-ns pl2-ns">
      <Timer className="mb2 dn" style={inlineStyle.clock} />
      <Participants eventUrl="/api/participants/dagens" style={inlineStyle.participants} />
    </div>
  </div>
);

export default DailyView;

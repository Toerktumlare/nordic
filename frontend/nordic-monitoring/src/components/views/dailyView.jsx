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
  main: {
    flex: 2,
  },
  sidebar: {
    flex: 1,
  },
  timer: {
    flex: 1,
  },
  participants: {
    flex: 2,
  },
};

const DailyView = () => (
  <div className="h-100-ns flex flex-column flex-row-ns pa2-ns" style={inlineStyle.container}>
    <WorkoutScreen eventUrl="/api/workouts/dagens" className="pr2-ns b--yellow" style={inlineStyle.main} />
    <div className="flex flex-column pl2-ns" style={inlineStyle.sidebar}>
      <Timer className="mb2 dn" style={inlineStyle.timer} />
      <Participants eventUrl="/api/participants/dagens" style={inlineStyle.participants} />
    </div>
  </div>
);

export default DailyView;

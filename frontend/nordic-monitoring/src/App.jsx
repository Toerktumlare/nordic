import React from 'react';
import './App.css';
import Timer from './components/timer/timer';
import Participants from './components/participants/participants';
import WorkoutScreen from './components/workout/workoutScreen';

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

const App = () => (
  <div className="h-100-ns flex flex-column flex-row-ns pa2-ns" style={inlineStyle.container}>
    <WorkoutScreen className="pr2-ns" />
    <div className="flex flex-column justify-around-ns content-stretch-ns pl2-ns">
      <Timer className="mb2 dn" style={inlineStyle.clock} />
      <Participants style={inlineStyle.participants} />
    </div>
  </div>
);

export default App;

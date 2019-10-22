/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
// import Clock from './components/clock/clock';
import Timer from './components/timer/timer';
import Participants from './components/participants/participants';
import Workout from './components/workout/workout';

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
    <Workout className="pr2-ns" />
    <div className="flex flex-column justify-around-ns content-stretch-ns pl2-ns">
      <Timer className="mb2 dn" style={inlineStyle.clock} />
      {/* <Clock className="mb2" style={inlineStyle.clock} /> */}
      <Participants style={inlineStyle.participants} />
    </div>
  </div>
);

export default App;

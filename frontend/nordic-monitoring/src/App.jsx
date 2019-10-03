/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
import Clock from './components/clock/clock';
import InfoBar from './components/infoBar/infoBar';
import Workout from './components/workout/workout';

const body = {
  backgroundColor: '#737373',
};

const App = () => (
  <div className="fl w-100 h-100" style={body}>
    <div className="fl w-70 h-100">
      <Workout />
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

export default App;

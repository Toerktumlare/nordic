/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
import Clock from './components/clock/clock';
import Attendees from './components/attendees/attendees';
import Workout from './components/workout/workout';

const workoutClass = { name: 'DAGENS_PASS', timestamp: 1570341600, attendees: [{ firstname: 'Jimmy', lastname: 'Bergqvist' }, { firstname: 'Torvald', lastname: 'Turesson' }, { firstname: 'Göta', lastname: 'Ringdahl' }, { firstname: 'Blenda', lastname: 'Blixt' }, { firstname: 'Olov', lastname: 'Selberg' }, { firstname: 'Nikolaus', lastname: 'Granström' }, { firstname: 'Henrietta', lastname: 'Söder' }, { firstname: 'Inga-Lisa', lastname: 'Berlin' }, { firstname: 'Eva-Lena', lastname: 'Stenström' }, { firstname: 'Ragnar', lastname: 'Jacobsson' }, { firstname: 'Cathrine', lastname: 'Mellberg' }, { firstname: 'Erna', lastname: 'Sonesson' }, { firstname: 'Elof', lastname: 'Wennberg' }, { firstname: 'Elving', lastname: 'Bergendahl' }, { firstname: 'Roger', lastname: 'Ekberg' }, { firstname: 'Olga', lastname: 'Asplund' }, { firstname: 'Thyra', lastname: 'Engdahl' }, { firstname: 'Monica', lastname: 'Sundin' }, { firstname: 'Annie', lastname: 'Müller' }, { firstname: 'Steve', lastname: 'Nylund' }, { firstname: 'Inga', lastname: 'Lindblom' }, { firstname: 'Marion', lastname: 'Blad' }, { firstname: 'Viktoria', lastname: 'Sjöstrand' }, { firstname: 'Ellen', lastname: 'Sandberg' }, { firstname: 'Håkan', lastname: 'Schmidt' }, { firstname: 'Beata', lastname: 'Schröder' }, { firstname: 'Olga', lastname: 'Enström' }, { firstname: 'Ulla-Britta', lastname: 'Sundkvist' }, { firstname: 'Vendela', lastname: 'Rosberg' }] };

const inlineStyle = {
  container: {
    position: 'absolute',
    backgroundColor: '#737373',
  },
  clock: {
    flex: 1,
  },
  attendees: {
    flex: 4,
  },
};

const App = () => (
  <div className="w-100 h-100 flex pa2" style={inlineStyle.container}>
    <Workout className="pr2" />
    <div className="flex flex-column justify-around content-stretch pl2">
      <Clock className="mb2" style={inlineStyle.clock} />
      <Attendees data={workoutClass} style={inlineStyle.attendees} />
    </div>
  </div>
);

export default App;

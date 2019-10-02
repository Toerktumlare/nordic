import React from 'react';
import './App.css';
import Clock from './components/clock/clock';
import InfoBar from './components/infoBar/infoBar';
import Workout from './components/workout/workout';
import { getWorkouts }from './store/actions/workoutsActions'
import {connect} from 'react-redux'

const body = {
  backgroundColor: '#737373'
};

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        wods: []
    };
  }

  componentDidMount() {
    this.props.getWorkouts();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.wods.length === 0) {
      this.setState({
        wods: this.props.wods,
      })

    }
  }

  render () {
    var filteredWorkouts = this.state.wods.filter((workoutType) => workoutType.name === "DAGENS_PASS");
    return (
      <div className="fl w-100 h-100" style={body}>
        <div className="fl w-70 h-100">
            <Workout workouts={filteredWorkouts}/>
        </div>
        <div className="fl w-30 h-100 pa1">
          <div className="flex flex-column">
            <Clock className={"mb2"} />
            <InfoBar className={"mb2"} text={"Dagens Pass - 07:00"} />
            <div className="mr2">
              Attendee component
            </div>  
          </div>
        </div>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    wods: state.wods
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getWorkouts: () => dispatch(getWorkouts())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

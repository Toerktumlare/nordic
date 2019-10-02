import React from 'react';
import moment from 'moment';
import WorkoutDay from './workoutDay';
import Instructions from './instructions';
import Header from "./header"
import WorkoutTypes from '../../constants/WorkoutTypes'
import Footer from './footer'

// const inlineStyle = {
//   flex: '1'
// };

class Workout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          header: this.props.header,
          date: moment(this.props.date, "YYYY-MM-DD"),
          workouts: this.props.workouts,
          currentIndex: this.props.currentIndex,
          workoutDays: this.genWorkoutDays(this.props.workouts)
        };
      }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if(prevProps.workouts.length !== this.props.workouts.length) {
        this.setState({
          workouts: this.props.workouts,
          workoutDays: this.genWorkoutDays(this.props.workouts)
        })
      }
    }

    handleForwardClick = (e) => {
      console.log("Forward Captain!");
      e.preventDefault();
      this.setState(prevState => {
        return {currentIndex: prevState.currentIndex + 1}
      })
    }

    handleBackwardClick = (e) => {
      console.log("Backward Captain!");
      e.preventDefault();
      this.setState(prevState => {
        return {currentIndex: prevState.currentIndex - 1}
      })
    }

    genWorkoutDays = workouts => {
      return workouts.flatMap((workoutWeek) => {

        const { name, workoutDays } = workoutWeek;
        const workoutName = WorkoutTypes[name];

        return workoutDays.map(workoutDay => {
          const {instructions, workouts, date} = workoutDay;
          return (
            <>
              <div className={"flex flex-column justify-between overflow-auto h-100"}>
                <Header className={"pl4"} name={workoutName} timestamp={date} />
                <WorkoutDay className={"pl4 pr4"} workouts={workouts} />
                <Instructions className={"pl4 pb2 pr4"} values={instructions} />
              </div>
            </>
          )
        })
      })
    };

    render() {

      let selectedWorkoutDay;
      if(this.state.workoutDays.length !== 0) {
        selectedWorkoutDay = this.state.workoutDays[this.state.currentIndex];
      }

        return (
            <div className={`bg-white flex flex-column justify-between ba bw3 b--yellow h-100 ${this.props.className}`}>
              
              {selectedWorkoutDay}
            
              <Footer className={"flex-0"} 
                onForward={this.handleForwardClick} 
                onBackward={this.handleBackwardClick}
              />
          </div>
        );
    }
}


Workout.defaultProps = {
  header: "",
  date: new Date(),
  workouts: [],
  currentIndex: moment().isoWeekday()-1,
  workoutComponents: []
};

export default Workout;
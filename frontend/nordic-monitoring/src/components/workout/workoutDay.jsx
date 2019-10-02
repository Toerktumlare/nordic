import React from 'react';
// import Textfit from 'react-textfit';

// const inlineStyle = {
//     height: '500px'
// };

// const flex = {
//     flex: '1'
// };

const WorkoutDay = ({className, workouts}) => {

    var workoutValue = <div>No workout registered today</div>
    if(workouts !== 'undefined') {
        workoutValue = workouts.map((workout, i) => 
        workout.split('\n')
                .map((text, j) => {
                    return (
                            <div className={"code pb3"} key={j}>
                                {text}
                            </div>
                        
                        )
                }));
    }

    return (
        <div className={`${className}`} >
          {/* <Textfit max={30} style={inlineStyle} > */}
            {workoutValue}
          {/* </Textfit> */}
        </div>
    );
};

WorkoutDay.defaultProps = {
    className: "",
    workouts: []
  };

export default WorkoutDay;
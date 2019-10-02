import React from 'react';

const Instructions = ({className, values}) => {

    var instructions = <div>No instructions today</div>
    if(values !== undefined) {
        instructions = values.map((value, i) => 
          value.split('\n')
                  .map((object, j) => {
                      return <div className={"pr2 pb1 f7"} key={j}>{object}</div>
                  }));
    }

    return (
        <div className={`pb2 ${className}`}>
            {instructions}
        </div>
    );
};

export default Instructions;
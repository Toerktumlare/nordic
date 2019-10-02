import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          time: new Date()
        };
      }

    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        time: new Date()
      });
    }

    render() {
        return (
            <div className={`bg-black tc ${this.props.className}`}>
              <h3 className="code white v-btm ma0 pt5 pb5 f-subheadline">
                  {this.state.time.toLocaleTimeString()}
              </h3>
          </div>
        );
    }
}
export default Clock;
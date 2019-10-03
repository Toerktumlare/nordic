import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
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
      time: new Date(),
    });
  }

  render() {
    const { className } = this.props;
    const { time } = this.state;
    return (
      <div className={`bg-black tc ${className}`}>
        <h3 className="code white v-btm ma0 pt5 pb5 f-subheadline">
          { time.toLocaleTimeString() }
        </h3>
      </div>
    );
  }
}

Clock.propTypes = {
  className: PropTypes.string,
};

Clock.defaultProps = {
  className: '',
};

export default Clock;

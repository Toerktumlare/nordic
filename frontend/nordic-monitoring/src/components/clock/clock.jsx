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
    const { className, style } = this.props;
    const { time } = this.state;
    return (
      <div className={`flex items-center justify-center bg-black tc pl4 pr4 pb5 pt5 ${className}`} style={style}>
        <h3 className="code white v-btm ma0 f-subheadline">
          { time.toLocaleTimeString() }
        </h3>
      </div>
    );
  }
}

Clock.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

Clock.defaultProps = {
  className: '',
  style: {},
};

export default Clock;

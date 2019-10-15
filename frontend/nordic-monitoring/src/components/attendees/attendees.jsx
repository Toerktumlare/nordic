import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import InfoBar from './infoBar';
import AttendeesList from './attendeesList';
import WorkoutTypes from '../../constants/WorkoutTypes';
import { setAttendees } from '../../store/actions/attendeeActions';

const inlineStyles = {
  infoBar: {
    flex: 1,
  },
  AttendeesList: {
    flex: 12,
  },
};

const Attendees = ({ style, data, addAttendees }) => {
  const [attendeeEvents] = useState(new EventSource('http://localhost:8080/api/attendees/subscribe'));

  let n = '';
  let t = '';
  let a = [];

  useEffect(() => {
    function handleAttendeeEvent(e) {
      addAttendees(JSON.parse(e.data));
    }

    attendeeEvents.addEventListener('message', handleAttendeeEvent);
  });

  // eslint-disable-next-line react/prop-types
  if (data.length !== 0) {
    // eslint-disable-next-line prefer-destructuring
    const { name, timestamp, attendees } = data[0];
    n = name;
    t = timestamp;
    a = attendees;
  }

  const localDateTime = moment(t).format('HH:mm');
  const className = WorkoutTypes[n];

  let attendeeListLeft = a;
  let attendeeListRight = [];

  if (a.length > 17) {
    attendeeListLeft = a.splice(0, 17);
    attendeeListRight = a.splice(0);
  }

  return (
    <div className="flex flex-column" style={style}>
      <InfoBar className="mb2 pa1" text={`${className} - ${localDateTime}`} style={inlineStyles.infoBar} />
      <div className="flex" style={inlineStyles.AttendeesList}>
        <AttendeesList className="mr1 w-100" data={attendeeListLeft} />
        <AttendeesList className="ml1 w-100" data={attendeeListRight} />
      </div>
    </div>
  );
};

Attendees.propTypes = {
  data: [],
  style: PropTypes.shape({}),
  addAttendees: PropTypes.func,
};

Attendees.defaultProps = {
  data: [],
  style: {},
  addAttendees: () => {},
};

function mapStateToProps(state) {
  return {
    data: state.attendees.data,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addAttendees: (attendees) => dispatch(setAttendees(attendees)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Attendees);

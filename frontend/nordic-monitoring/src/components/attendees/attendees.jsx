import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import InfoBar from './infoBar';
import AttendeesList from './attendeesList';
import WorkoutTypes from '../../constants/WorkoutTypes';

const inlineStyles = {
  infoBar: {
    flex: 1,
  },
  AttendeesList: {
    flex: 12,
  },
};

const Attendees = ({ data, style }) => {
  const { name, timestamp, attendees } = data;
  const localDateTime = moment(timestamp).format('HH:mm');
  const className = WorkoutTypes[name];

  let attendeeListLeft = attendees;
  let attendeeListRight = [];

  if (attendees.length > 17) {
    attendeeListLeft = attendees.splice(0, 17);
    attendeeListRight = attendees.splice(0);
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
  data: PropTypes.shape({
    name: PropTypes.string,
    timestamp: PropTypes.number,
    attendees: PropTypes.arrayOf(PropTypes.object),
  }),
  style: PropTypes.shape({}),
};

Attendees.defaultProps = {
  data: [],
  style: {},
};

export default Attendees;

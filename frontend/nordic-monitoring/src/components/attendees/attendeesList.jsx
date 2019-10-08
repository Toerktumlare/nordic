import React from 'react';
import { PropTypes } from 'prop-types';

const AttendeesList = ({ className, data, style }) => (
  <div className={`bg-blue ${className}`} style={style}>
    {data.map((attendee) => (
      <p className="code f7 white">
        {`${attendee.firstname} ${attendee.lastname}`}
      </p>
    ))}
  </div>
);

AttendeesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

AttendeesList.defaultProps = {
  data: [],
  className: PropTypes.string,
  style: {},
};

export default AttendeesList;

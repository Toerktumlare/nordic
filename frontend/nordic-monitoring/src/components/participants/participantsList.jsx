import React from 'react';
import { PropTypes } from 'prop-types';

const ParticipantsList = ({ className, data, style }) => (
  <div className={`bg-blue ${className}`} style={style}>
    {data.map((participant) => (
      <p className="futura f7 pl2 white">
        {`${participant.firstname} ${participant.lastname}`}
      </p>
    ))}
  </div>
);

ParticipantsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ParticipantsList.defaultProps = {
  data: [],
  className: PropTypes.string,
  style: {},
};

export default ParticipantsList;

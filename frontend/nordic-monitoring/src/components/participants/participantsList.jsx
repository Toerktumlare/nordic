import React from 'react';
import { PropTypes } from 'prop-types';

const ParticipantsList = ({
  className, data, style, hidden,
}) => {
  let participants = null;
  if (data !== undefined || !hidden || data.length === 0) {
    participants = data.map((participant) => (
      <p className="futura f7 pl2 white">
        {`${participant.firstname} ${participant.lastname}`}
      </p>
    ));
  }

  return (
    <div className={`bg-blue ${className}`} style={style}>
      {participants}
    </div>
  );
};

ParticipantsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  style: PropTypes.shape({}),
  hidden: PropTypes.bool,
};

ParticipantsList.defaultProps = {
  data: [],
  className: PropTypes.string,
  style: {},
  hidden: false,
};

export default ParticipantsList;

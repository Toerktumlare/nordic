import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import InfoBar from './infoBar';
import ParticipantsList from './participantsList';
import WorkoutTypes from '../../constants/WorkoutTypes';
import { setParticipants } from '../../store/actions/participantsActions';

const inlineStyles = {
  infoBar: {
    flex: 1,
  },
  AttendeesList: {
    flex: 12,
  },
};

const Participants = ({ style, data, addParticipant }) => {
  const [participantsEvents] = useState(new EventSource('http://localhost:8080/api/participants'));

  let n = '';
  let t = '';
  let participantList = [];

  useEffect(() => {
    function handleParticipantsEvent(e) {
      addParticipant(JSON.parse(e.data));
    }

    participantsEvents.addEventListener('message', handleParticipantsEvent);

    return () => {
      participantsEvents.removeEventListener('message', handleParticipantsEvent);
    };
  }, []);

  // eslint-disable-next-line react/prop-types
  if (data.length !== 0) {
    // eslint-disable-next-line prefer-destructuring
    const { name, timestamp, participants } = data[0];
    n = name;
    t = timestamp;
    participantList = participants;
  }

  const localDateTime = moment.unix(t).format('HH:mm');
  const className = WorkoutTypes[n];

  let participantsListLeft = participantList;
  let participantsListCenter = [];
  let participantsListRight = [];

  const participantListComponents = [];
  if (participantList.length <= 34) {
    participantsListLeft = participantList.splice(0, 17);
    participantsListCenter = participantList.splice(0);
    participantListComponents[0] = <ParticipantsList className="mr1 w-100" data={participantsListLeft} />;
    participantListComponents[1] = <ParticipantsList className="ml1 w-100" data={participantsListCenter} />;
  } else if ((participantList.length > 34)) {
    participantsListLeft = participantList.splice(0, 17);
    participantsListCenter = participantList.splice(0, 17);
    participantsListRight = participantList.splice(0);
    participantListComponents[0] = <ParticipantsList className="mr1 w-100" data={participantsListLeft} />;
    participantListComponents[1] = <ParticipantsList className="ml1 mr1 w-100" data={participantsListCenter} />;
    participantListComponents[2] = <ParticipantsList className="ml1 w-100" data={participantsListRight} />;
  }

  return (
    <div className="flex flex-column" style={style}>
      <InfoBar className="mb2 pa1" text={`${className} - ${localDateTime}`} style={inlineStyles.infoBar} />
      <div className="flex" style={inlineStyles.AttendeesList}>
        {participantListComponents}
      </div>
    </div>
  );
};

Participants.propTypes = {
  data: [],
  style: PropTypes.shape({}),
  addParticipant: PropTypes.func,
};

Participants.defaultProps = {
  data: [],
  style: {},
  addParticipant: () => {},
};

function mapStateToProps(state) {
  return {
    data: state.attendees.data,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addParticipant: (attendees) => dispatch(setParticipants(attendees)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Participants);

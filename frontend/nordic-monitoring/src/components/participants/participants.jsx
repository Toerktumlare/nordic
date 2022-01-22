import React from 'react';
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

class Participants extends React.Component {
  constructor(props) {
    super(props);

    const { data, eventUrl } = this.props;

    this.state = {
      participantsEvents: new EventSource(eventUrl),
      data,
      divHeight: 1,
    };
  }

  componentDidMount() {
    const { participantsEvents } = this.state;
    participantsEvents.addEventListener('message', this.handleParticipantsEvent);
    this.setState({ divHeight: this.participantDiv.clientHeight });
  }

  componentWillUnmount() {
    const { participantsEvents } = this.state;
    participantsEvents.close();
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      data: nextProps.data,
    };
  }

  handleParticipantsEvent = (e) => {
    const { addParticipant } = this.props;
    addParticipant(JSON.parse(e.data));
  };

  render() {
    const { data, divHeight } = this.state;
    const { style } = this.props;
    const filteredData = data.filter((activity) => (activity.endTime - 300) > moment().unix());

    let participantList = [];
    let workoutTypeString = 'No Classes Today';
    let localDateTime = '';

    const participantsPerColumn = divHeight / 25;

    // eslint-disable-next-line react/prop-types
    if (filteredData.length !== 0) {
      // eslint-disable-next-line prefer-destructuring
      const { name, startTime, participants } = filteredData[0];
      workoutTypeString = WorkoutTypes[name];
      localDateTime = ` - ${moment.unix(startTime).format('HH:mm')}`;
      participantList = participants;
    }

    const text = workoutTypeString + localDateTime;

    let participantsListLeft = participantList;
    let participantsListCenter = [];
    let participantsListRight = [];

    const participantListComponents = [];
    if (participantList.length <= (participantsPerColumn * 2)) {
      participantsListLeft = participantList.splice(0, participantsPerColumn);
      participantsListCenter = participantList.splice(0);
      participantListComponents[0] = <ParticipantsList className="mr1 w-100" data={participantsListLeft} />;
      participantListComponents[1] = <ParticipantsList className="ml1 w-100" data={participantsListCenter} />;
    } else if (participantList.length > (participantsPerColumn * 2)) {
      participantsListLeft = participantList.splice(0, participantsPerColumn);
      participantsListCenter = participantList.splice(0, participantsPerColumn);
      participantsListRight = participantList.splice(0);
      participantListComponents[0] = <ParticipantsList className="mr1 w-100" data={participantsListLeft} />;
      participantListComponents[1] = <ParticipantsList className="ml1 mr1 w-100" data={participantsListCenter} />;
      participantListComponents[2] = <ParticipantsList className="ml1 w-100" data={participantsListRight} />;
    }

    return (
      <div className="flex flex-column" style={style}>
        <InfoBar className="mb2 pa1" text={text} style={inlineStyles.infoBar} />
        <div className="flex" ref={(divElement) => { this.participantDiv = divElement; }} style={inlineStyles.AttendeesList}>
          {participantListComponents}
        </div>
      </div>
    );
  }
}

Participants.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.shape({}),
  addParticipant: PropTypes.func,
  eventUrl: PropTypes.string,
};

Participants.defaultProps = {
  data: [],
  style: {},
  addParticipant: () => {},
  eventUrl: '',
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

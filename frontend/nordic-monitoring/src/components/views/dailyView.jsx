import React from 'react';
import './views.css';
import Timer from '../timer/timer';
import Participants from '../participants/participants';
import WorkoutScreen from '../workout/workoutScreen';
import ColoredBackground from '../coloredBackground';
import SideBarSection from '../sidebarSection';
import MainSection from '../mainSection';

const inlineStyle = {
  participants: {
    flex: 2,
  },
};

const DailyView = () => (
  <ColoredBackground color="#737373">
    <MainSection>
      <WorkoutScreen eventUrl="/api/workouts/dagens" color="#ffdb4d" />
    </MainSection>
    <SideBarSection>
      <Timer className="mb2 dn" />
      <Participants eventUrl="/api/participants/dagens" style={inlineStyle.participants} />
    </SideBarSection>
  </ColoredBackground>
);

export default DailyView;

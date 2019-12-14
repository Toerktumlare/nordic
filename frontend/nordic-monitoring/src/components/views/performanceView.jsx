import React from 'react';
import './views.css';
import Timer from '../timer/timer';
import Participants from '../participants/participants';
import WorkoutScreen from '../workout/workoutScreen';
import ColoredBackground from '../coloredBackground';
import MainSection from '../mainSection';
import SideBarSection from '../sidebarSection';

const inlineStyle = {
  participants: {
    flex: 2,
  },
};

const PerformanceView = () => (
  <ColoredBackground color="#737373">
    <MainSection>
      <WorkoutScreen eventUrl="/api/workouts/performance" color="#0085CA" />
    </MainSection>
    <SideBarSection>
      <Timer className="mb2 dn" />
      <Participants eventUrl="/api/participants/fitness" style={inlineStyle.participants} />
    </SideBarSection>
  </ColoredBackground>
);

export default PerformanceView;

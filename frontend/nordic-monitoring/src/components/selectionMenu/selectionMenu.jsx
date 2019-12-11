import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SelectionMenuButton from './selectionMenuButton';
import Header from './header';


const SelectionMenu = ({ history }) => (
  <div className="flex flex-column align-center h-100">
    <div className="flex pa3 absolute w-40 w-10-ns">
      <Header />
    </div>
    <div className="flex flex-column justify-center h-100">
      <div className="flex flex-column flex-row-ns justify-center item-center-ns h-30">
        <SelectionMenuButton className="flex-grow-1-ns" text="Dagens Pass" onClick={() => { history.push('/daily'); }} />
        <SelectionMenuButton className="flex-grow-1-ns" text="Fitness" onClick={() => { history.push('/fitness'); }} />
        <SelectionMenuButton className="flex-grow-1-ns" text="Performance" disabled />
      </div>
    </div>
  </div>
);

SelectionMenu.defaultProps = {
  history: {},
};

SelectionMenu.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(SelectionMenu);

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SelectionMenuButton from './selectionMenuButton';

const SelectionMenu = ({ history }) => (
  <div className="fl w-100 h-100 flex items-center">
    <div className="w-100 flex justify-center">
      <SelectionMenuButton className="fl w-30" text="Dagens Pass" onClick={() => { history.push('/daily'); }} />
      <SelectionMenuButton className="fl w-30" text="Fitness" disabled />
      <SelectionMenuButton className="fl w-30" text="Performance" disabled />
    </div>
  </div>
);

SelectionMenu.defaultProps = {
  history: {},
};

SelectionMenu.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.any,
};

export default withRouter(SelectionMenu);

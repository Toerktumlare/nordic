import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SelectionMenuButton from './selectionMenuButton';

const SelectionMenu = ({ history }) => (

  <div className="flex justify-center items-center h-100">
    <div className="flex flex-column flex-row-ns justify-center justify-center-ns item-stretch item-center-ns flex-grow-1">
      <SelectionMenuButton className="flex-grow-1-ns" text="Dagens Pass" onClick={() => { history.push('/daily'); }} />
      <SelectionMenuButton className="flex-grow-1-ns" text="Fitness" disabled />
      <SelectionMenuButton className="flex-grow-1-ns" text="Performance" disabled />
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

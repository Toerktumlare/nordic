import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SelectionMenuButton from './selectionMenuButton';
import PopUpMenu from '../popupMenu';

// const inlineStyle = {
//   selection: {
//     flex: 4,
//   },
//   menu: {
//     flex: 1,
//   },
// };

const SelectionMenu = ({ history }) => (
  <div className="flex flex-column align-center h-100">
    <div className="flex pa3">
      <PopUpMenu className="w-50 w-10-ns pr2" />
    </div>
    <div className="flex flex-column justify-center h-100">
      <div className="flex flex-column flex-row-ns justify-center item-center-ns h-30">
        <SelectionMenuButton className="flex-grow-1-ns" text="Dagens Pass" onClick={() => { history.push('/daily'); }} />
        <SelectionMenuButton className="flex-grow-1-ns" text="Fitness" disabled />
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

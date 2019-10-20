import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight, MdMenu } from 'react-icons/md';
import Button from './IconButton';

const Footer = ({
  className, onLeft, onRight, onMenu, hideLeftButton, hideRightButton,
}) => (
  <footer className={`flex justify-between ${className}`}>
    <Button onClick={onLeft} hidden={hideLeftButton}>
      <MdChevronLeft />
    </Button>
    <Button onClick={onMenu}>
      <MdMenu />
    </Button>
    <Button onClick={onRight} hidden={hideRightButton}>
      <MdChevronRight />
    </Button>
  </footer>
);

Footer.defaultProps = {
  className: '',
  onRight: () => {},
  onLeft: () => {},
  onMenu: () => {},
  hideLeftButton: false,
  hideRightButton: false,
};

Footer.propTypes = {
  className: PropTypes.string,
  onRight: PropTypes.func,
  onLeft: PropTypes.func,
  onMenu: PropTypes.func,
  hideRightButton: PropTypes.bool,
  hideLeftButton: PropTypes.bool,
};

export default withRouter(Footer);

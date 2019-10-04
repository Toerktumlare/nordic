import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight, MdMenu } from 'react-icons/md';
import Button from './Button';

const Footer = ({
  className, onForward, onBackward, onMenu,
}) => (
  <footer className={`flex justify-between ${className}`}>
    <Button onClick={onBackward}>
      <MdChevronLeft />
    </Button>
    <Button onClick={onMenu}>
      <MdMenu />
    </Button>
    <Button onClick={onForward}>
      <MdChevronRight />
    </Button>
  </footer>
);

Footer.defaultProps = {
  className: '',
  onForward: () => {},
  onBackward: () => {},
  onMenu: () => {},
};

Footer.propTypes = {
  className: PropTypes.string,
  onForward: PropTypes.func,
  onBackward: PropTypes.func,
  onMenu: PropTypes.func,
};

export default withRouter(Footer);

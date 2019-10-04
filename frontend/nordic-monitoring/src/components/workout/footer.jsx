import React from 'react';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdChevronRight, MdMenu } from 'react-icons/md';
import Button from './Button';

const Footer = ({ className, onForward, onBackward }) => (
  <footer className={`flex justify-between ${className}`}>
    <Button onClick={onBackward}>
      <MdChevronLeft />
    </Button>
    <Button>
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
};

Footer.propTypes = {
  className: PropTypes.string,
  onForward: PropTypes.func,
  onBackward: PropTypes.func,
};

export default Footer;

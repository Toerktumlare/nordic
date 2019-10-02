import React from 'react';
import PropTypes from 'prop-types';
import ButtonLeft from './buttonLeft'
import ButtonRight from './buttonRight'
import ButtonMenu from './buttonMenu'

const Footer = ({className, onForward, onBackward}) => {

    return (
      <footer className={"flex justify-between"}>
        <ButtonLeft onClick={onBackward}/>
        <ButtonMenu />
        <ButtonRight onClick={onForward} />

      </footer>
    );
};

Footer.propTypes = {
  className: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBackward: PropTypes.func.isRequired
}

export default Footer;
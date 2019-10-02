import React from 'react';
import { MdChevronLeft } from 'react-icons/md';
import PropTypes from 'prop-types';

const Button = ({className, onClick}) => {

    return (
        <a className={`no-underline near-black bg-animate hover-bg-gray inline-flex items-center ma2 tc br2 pa2 ${className}`} href="#"
            onClick={onClick}
            style={{outline: 'none', MozOutlineStyle: 'none'}}
        >
            <MdChevronLeft />
        </a >
    );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;
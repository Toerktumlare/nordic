import React from 'react';
import { MdMenu } from 'react-icons/md';
import PropTypes from 'prop-types';

const Button = ({className, onClick}) => {

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className={`no-underline near-black bg-animate hover-bg-gray inline-flex items-center ma2 tc br2 pa2 ${className}`} href="#"
            onClick={onClick}
        >
            <MdMenu />
        </a>
    );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;
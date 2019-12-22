import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { MdRemoveCircleOutline, MdControlPoint } from 'react-icons/md';
import Button from './IconButton';

const Header = ({ className, name, timestamp }) => {
  const dateMoment = moment.unix(timestamp);
  const weekday = dateMoment.format('dddd');
  const formattedDate = dateMoment.format('YYYY-MM-DD');

  return (
    <div className={`flex justify-between ${className}`}>
      <h1 className="futura pt1 pb2 f5 f2-ns">
        {`${name} - ${weekday} ${formattedDate}`}
      </h1>
      <div className="dn">
        <Button>
          <MdRemoveCircleOutline />
        </Button>
        <Button>
          <MdControlPoint />
        </Button>
      </div>
    </div>
  );
};

Header.defaultProps = {
  className: '',
  name: '',
  timestamp: undefined,
};

Header.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  timestamp: PropTypes.number,
};

export default Header;

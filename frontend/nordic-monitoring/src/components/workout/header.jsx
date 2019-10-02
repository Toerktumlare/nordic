import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment';

const Header = ({className, name, timestamp}) => {
  const dateMoment = moment.unix(timestamp);
  const weekday = dateMoment.format('dddd');
  const formattedDate = dateMoment.format('YYYY-MM-DD');

  return (
    <div className={`${className}`}>
      <h1 className={"code pt1 pb2"}>
        {name} - {weekday} {formattedDate}
      </h1>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  timestamp: PropTypes.number
};

export default Header;
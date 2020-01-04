import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TextResizeButtons from './textResizeButtons';

const Header = ({
  className,
  name,
  timestamp,
  onClickPlus,
  onClickMinus,
}) => {
  const dateMoment = moment.unix(timestamp);
  const weekday = dateMoment.format('dddd');
  const formattedDate = dateMoment.format('YYYY-MM-DD');

  return (
    <div>
      <div className={`${className}`}>
        <h1 className="futura pt1 pb2 f5 f2-ns">
          {`${name} - ${weekday} ${formattedDate}`}
        </h1>
        <TextResizeButtons onClickPlus={onClickPlus} onClickMinus={onClickMinus} />
      </div>
    </div>
  );
};

Header.defaultProps = {
  className: '',
  name: '',
  timestamp: undefined,
  onClickPlus: () => {},
  onClickMinus: () => {},
};

Header.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  timestamp: PropTypes.number,
  onClickPlus: PropTypes.func,
  onClickMinus: PropTypes.func,
};

export default Header;

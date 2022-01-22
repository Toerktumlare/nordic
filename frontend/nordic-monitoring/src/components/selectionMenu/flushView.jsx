/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';
import { doFlush } from '../../store/actions/workoutsActions';

class FlushView extends React.Component {
  constructor(props) {
    super(props);
    const { isFlushing } = this.props;
    this.state = {
      isFlushing,
      closeModal: false,
    };
  }

  static getDerivedStateFromProps(props) {
    return {
      isFlushing: props.isFlushing,
    };
  }

  onHandleFlush = (event) => {
    event.preventDefault();
    const { onFlush } = this.props;
    onFlush();
    this.setState({ closeModal: true });
  };

  render() {
    const { isFlushing, closeModal } = this.state;
    const { onClose } = this.props;

    if (closeModal && !isFlushing) {
      onClose();
    }

    return (
      <div className="pv3 ph3 futura uc">
        <h3 className="pv4 ph5">Reset and refetch all workouts?</h3>
        <div className="flex justify-around">
          <a className={`f6 no-underline br-pill ph5 pv2 mb2 dib white bg-dark-blue ${isFlushing ? 'o-50' : 'grow'}`} href="" onClick={onClose}>No</a>
          <a className="f6 grow no-underline br-pill ph5 pv2 mb2 dib white bg-dark-blue" href="" onClick={() => this.onHandleFlush}>
            {isFlushing ? (
              <ThreeDots
                color="#FFFFFF"
                width={20}
                height={13}
                timeout={30000}
                visible={isFlushing}
              />
            ) : (
              'Yes'
            )}
          </a>
        </div>
      </div>
    );
  }
}

FlushView.propTypes = {
  onClose: PropTypes.func,
  onFlush: PropTypes.func,
  isFlushing: PropTypes.bool,
};

FlushView.defaultProps = {
  onClose: () => {},
  onFlush: () => {},
  isFlushing: false,
};

function mapStateToProps(state) {
  return {
    isFlushing: state.workouts.isFlushing,
  };
}

const mapDispatchToProps = (dispatch) => ({
  onFlush: () => dispatch(doFlush()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlushView);

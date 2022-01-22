import React from 'react';
import Modal from 'react-modal';
import Menu from '../menu';
import MenuItem from '../menuItem';
import FlushView from './flushView';
import AboutView from './aboutView';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-20%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefetchModalOpen: false,
      isAboutModalOpen: false,
    };
  }

  openRefetchModal = (event) => {
    event.preventDefault();
    this.setState({ isRefetchModalOpen: true });
  };

  closeRefetchModal = () => {
    this.setState({ isRefetchModalOpen: false });
  };

  openAboutModal = (event) => {
    event.preventDefault();
    this.setState({ isAboutModalOpen: true });
  };

  closeAboutModal = () => {
    this.setState({ isAboutModalOpen: false });
  };

  render() {
    const { isRefetchModalOpen, isAboutModalOpen } = this.state;
    return (
      <div className="w-100">
        <Modal
          isOpen={isRefetchModalOpen}
          onRequestClose={this.closeRefetchModal}
          style={customStyles}
          contentLabel="Refetch modal"
        >
          <FlushView onClose={this.closeRefetchModal} />
        </Modal>
        <Modal
          isOpen={isAboutModalOpen}
          onRequestClose={this.closeAboutModal}
          style={customStyles}
          contentLabel="About Modal"
        >
          <AboutView />
        </Modal>
        <Menu className="w-100 w-100-ns">
          <MenuItem onClick={this.openRefetchModal}>
            Refetch
          </MenuItem>
          <MenuItem onClick={this.openAboutModal}>
            About
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default Header;

import React from 'react';
import Modal from 'react-modal';
import Menu from '../menu';
import MenuItem from '../menuItem';
import FlushView from './flushView';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = (event) => {
    event.preventDefault();
    this.setState({ isModalOpen: true });
  }

  closeModal = () => {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { isModalOpen } = this.state;
    return (
      <div className="w-100">
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <FlushView onClose={this.closeModal} />
        </Modal>
        <Menu className="w-100 w-100-ns">
          <MenuItem onClick={this.openModal}>
            Refetch
          </MenuItem>
          <MenuItem>
            About
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default Header;

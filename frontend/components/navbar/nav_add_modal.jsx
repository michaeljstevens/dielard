import React from 'react';
import Modal from 'react-modal';
import NavAddModalStyle from './nav_add_modal_style.js';
import { Link, hashHistory, withRouter } from 'react-router';

class NavAddModal extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      modalOpen: false
    }

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  render () {
    const newRouteUrl = `/users/${this.props.currentUser.id}/routes/new`;
    const newExerciseUrl = `/users/${this.props.currentUser.id}/exercises/new`;
    return(
      <div>
        
        <Modal isOpen={this.state.modalOpen}
          style={NavAddModalStyle}
          onRequestClose={this.closeModal}
          className="nav-add-modal">

          <ul>
            <Link to={newRouteUrl}><li onClick={this.closeModal}>New Route</li></Link>
            <Link to={newExerciseUrl}><li onClick={this.closeModal}>New Exercise</li></Link>
          </ul>
        </Modal>
    </div>
    );
  }
}

export default NavAddModal;

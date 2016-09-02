import React from 'react';
import Modal from 'react-modal';
import RouteFormModalStyle from './route_form_model_style.js';
import {merge} from 'lodash';

class RouteFormModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {title: "", description: "", modalOpen: false};
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  updateState (field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  handleSubmit (e){
    e.preventDefault();
    this.props.state["title"] = this.state.title;
    this.props.state["description"] = this.state.description;
    this.props.dispatch(this.props.state);
    this.closeModal();
  }

  closeModal (){
    this.setState({ modalOpen: false });
  }

  openModal (){
    if (this.props.state.distance === "") {
      window.alert("Please specify a start and end point")
    } else {
      this.setState({ modalOpen: true });
    }
  }

  render (){
    return(
      <div>
        <button onClick={this.openModal}>
          <label>Create Route</label>
          <label>{this.props.state.distance}</label>
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          style={RouteFormModalStyle}
          onRequestClose={this.closeModal}>
          <form onSubmit={this.handleSubmit} className="route-modal-form">
            <label>Route Name</label>
            <input type="text" onChange={this.updateState("title")} />
            <label>Description</label>
            <input type="text" onChange={this.updateState("description")}/>
            <p>Distance: {this.props.state.distance}</p>
            <p>Estimated Duration: {this.props.state.duration}</p>
            <input type="submit" value="Go"/>
          </form>
        </Modal>
      </div>
    );
  }
}

export default RouteFormModal;

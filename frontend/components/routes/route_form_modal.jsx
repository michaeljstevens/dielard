import React from 'react';
import Modal from 'react-modal';
import RouteFormModalStyle from './route_form_model_style.js';
import {merge} from 'lodash';
import {hashHistory} from 'react-router';

class RouteFormModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {title: "", description: "", modalOpen: false};
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.submitDisabled = true;
    this.submitStyle = {
      border: "1px solid black",
      position: "absolute",
      bottom: "14px",
      right: "15px",
      padding: "6px",
      background: "lightgrey",
      color: "white"
    };
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
    hashHistory.push(`/users/${this.props.currentUser.id}/routes`);
  }

  closeModal (){
    this.setState({ modalOpen: false, title: "", description: "" });
  }

  openModal (){
    if (this.props.state.distance === "") {
      window.alert("Please specify a start and end point")
    } else {
      this.setState({ modalOpen: true });
    }
  }

  render (){

    if(this.state.title && this.state.description) {
      this.submitDisabled = false;
    } else {
      this.submitDisabled = true;
    }

    if (!this.submitDisabled) {
      this.submitStyle = {
        border: "1px solid black",
        position: "absolute",
        bottom: "14px",
        right: "15px",
        padding: "6px",
        background: "black",
        color: "white"
      };
    } else {
      this.submitStyle = {
        border: "1px solid black",
        position: "absolute",
        bottom: "14px",
        right: "15px",
        padding: "6px",
        background: "lightgrey",
        color: "white"
      };
    }

    return(
      <div>
        <button className="route-modal-button" onClick={this.openModal}>
          <ul>
            <li>Create Route</li>
            <li>{this.props.state.distance}</li>
          </ul>
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          style={RouteFormModalStyle}
          onRequestClose={this.closeModal}
          className="route-modal">
          <form onSubmit={this.handleSubmit} className="route-modal-form">
            <ul>
              <li><label>Route Name:</label></li>
              <li><input type="text" className="route-modal-input" onChange={this.updateState("title")} /></li>
              <br />
              <li><label>Description:</label></li>
              <li><textarea className="route-modal-description" onChange={this.updateState("description")}/></li>
              <br />
              <li>Distance:</li>
              <li>{this.props.state.distance}</li>
              <br />
              <li>Estimated Duration:</li>
              <li>{this.props.state.duration}</li>
              <br />
            </ul>
            <input type="submit" disabled={this.submitDisabled} style={this.submitStyle} className="route-modal-submit" value="Submit"/>
          </form>
        </Modal>
      </div>
    );
  }
}

export default RouteFormModal;

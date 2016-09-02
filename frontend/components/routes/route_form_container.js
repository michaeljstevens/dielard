import { connect } from 'react-redux';
import RouteForm from './route_form.jsx';
import {createRoute} from '../../actions/route_actions.js';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createRoute: route => dispatch(createRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteForm);

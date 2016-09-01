import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import SessionFormContainer from './session_form/session_form_container';
import UserProfileFormContainer from './user_profile/user_profile_form_container.js';
import WorkoutFeed from './workout_feed/workout_feed.jsx';
import UserProfileIndexItemContainer from './user_profile/user_profile_index_item_container.js';
import RouteFormContainer from './routes/route_form_container.js';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  _getUserID () {
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      return currentUser.id;
    }
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ WorkoutFeed } onEnter={this._ensureLoggedIn} />
          <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="/users/:id" component={ UserProfileIndexItemContainer } onEnter={this._ensureLoggedIn} />
          <Route path="/users/:id/edit" component={ UserProfileFormContainer } onEnter={this._ensureLoggedIn} />
          <Route path="/users/:id/routes/new" component={ RouteFormContainer } onEnter={this._ensureLoggedIn} />
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;

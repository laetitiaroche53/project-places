import React, { Component } from 'react';
import '../src/App.scss';
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';


import {Switch, Route} from 'react-router-dom';

import Home from './components/Home.js';

import Signup from './components/auth/Signup.js';
import Login from './components/auth/Login.js';
import Category from './components/dashboard/Category.js';
import CategoryLogged from './components/dashboard/CategoryLogged.js';
import NewPlace from './components/dashboard/NewPlace.js';
import Place from './components/dashboard/Place.js';
// import Profile from './components/auth/Profile.js';
// import AuthService from './components/auth/auth-service.js';

class App extends Component {
  state = {
    user: null
  };

  // service = new AuthService();

  // fetchUser = () => {
  //   if (this.state.user === null ) {
  //     this.service.loggedin()
  //       .then(response => this.setState({user: response}))
  //       .catch(err => this.setState({user: false}))
  //     ;
  //   }
  // };

  // updateUser = (data) => {
  //   this.setState({user: data});
  // };

  // componentDidMount() {
  //   this.fetchUser();
  // }

  render() {
    return (
      <Route render={(props) => (
        <div className="App" data-route={props.location.pathname}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Category} />
              <Route exact path="/dashboard/logged" component={CategoryLogged} />
              <Route exact path="/places/new" component={NewPlace} />
              <Route exact path="/places/id" component={Place} />
              {/* <Route exact path="/:user_id" component={Dashboard} /> */}
              {/* <Route exact path="/places/:category" component={Places} />
              <Route exact path="/places/:id" component={PlaceDetails} />
              <Route exact path="/places/new" component={NewPlace} /> */}
            </Switch>
        </div>
      )} />
    );
  }
}



export default App;

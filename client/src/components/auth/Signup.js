import React from 'react';
import {Link} from 'react-router-dom';
import AuthService from './auth-service.js';

export default class extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
  }

  service = new AuthService();

  handleSubmit = (event) => {
    event.preventDefault();

    this.service.signup(this.state.username, this.state.password)
      .then(() => {
        this.service.edit(this.state.username, this.state.campus, this.state.course)
        .then(response => {
          this.props.updateUser(response);
          this.props.history.push('/');
        })
      })
    ;
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  } 

  render() {
    return (
        <div>
        
        <nav
          class='navbar is-transparent is-fixed-top is-mobile'
          role='navigation'
          aria-label='main navigation'
        >
          <div class='navbar-brand'>
            <a class='navbar-item' href='https://bulma.io'>
              <img src='https://res.cloudinary.com/djku1z7tk/image/upload/v1553702403/logo-capital.png'/>
            </a>

            <a role='button' class='navbar-burger burger iis-active' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
              <span aria-hidden='true' />
              <span aria-hidden='true' />
              <span aria-hidden='true' />
            </a>
          </div>

          <div id='navbarBasicExample' class='navbar-menu iis-active'>
            <div class='navbar-end'>
              <a class='navbar-item'>About</a>
              <div class='buttons'>
                <a class='button is-primary'>
                  <strong>Login</strong>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="container">
          <h1>Sign up</h1>
          <img class="imgheader" src="/love-place.png"/>
          <section class="section is-medium" id="form">

            <form onSubmit={this.handleSubmit}>

              <div class="field">
                {/* <label class="label">Username</label> */}
                <div class="control">
                <input class="input" type="text" placeholder="Username to share with your friends"name="username" value={this.state.username} onChange={this.handleChange}/>
                </div>
              </div>

              <div class="field">
                {/* <label class="label">Email</label> */}
                  <div class="control">
                  <input class="input" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
                  </div>
              </div>

              <div class="field">
                {/* <label class="label">Password</label> */}
                  <div class="control">
                  <input class="input" type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                  </div>
              </div>

             </form>
             <br/>

            <p class="help">If you already have an account, you can login from <Link to="/login">here</Link></p>
            <br/>

            <button class="button is-danger" onClick={this.handleSubmit}>Create the account</button>

          </section>
        </div>
      </div>
    );
  }
}
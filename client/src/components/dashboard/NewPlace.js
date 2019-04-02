import React, { Component } from 'react'

// import {Link} from 'react-router-dom';

class NewPlace extends Component {
//   state = {
//     username: "",
//     password: ""
//   }

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

        
        <section class="section is-medium">
            <div class="container">
                <div class="columns is-mobile"> 
                    <div class="column">
                        <img class="profile" src="/profile.png"/>
                        <h1 class="title">@archana</h1>
                        <a class="button is-outlined">Edit profile</a>
                    </div>

                    <div class="column kpi">
                        <div class="level-item has-text-centered">
                            <div>
                            <p class="heading">Places</p>
                            <p class="title">3,456</p>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                            <p class="heading">Following</p>
                            <p class="title">123</p>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                            <p class="heading">Followers</p>
                            <p class="title">456K</p>
                            </div>
                        </div>
                        <a class="button add is-danger">+</a>
                    </div>
                </div>
            </div>
        </section>


        <div className="container">
          <section class="section is-medium" id="category">

            <div class="view">

            <div class="notification is-danger">
                <button class="delete"></button>
                <strong>Hi Archana, welcome on Greatspots ! </strong><br/>
                <br/>
                You can start saving all your top favorites places in here and <br/>share your 100% tested addresses with your friends only !
                As nothing is better than a recommendation from a close one, it's time to value it ! 
                <br/>
                <br/>
                <strong> Start now and add your first great place ! </strong>
                <br/>
                <br/>
                <a class="button">Add your first ❤️ place</a>
            </div>
                
            </div>

            </section>
        
        </div>
      </div>
    );
  }
}

export default NewPlace
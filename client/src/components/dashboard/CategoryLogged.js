import React, { Component } from 'react'

// import {Link} from 'react-router-dom';

class CategoryLogged extends Component {
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
                <ul class="card__list">
                    <li class="card__item card__item--red ">
                        <div class="info-player">
                            <img class="category-img" src="/img-restaurant.png"/>
                            <div class="info">
                                <img class = "info-player__num"src="/icon-restaurant.png"/>
                                <p class="info-player__name">Restaurant</p>
                                <p><small>4 places</small></p>
                            </div>
                        </div>
                    </li>
                
                    <li class="card__item card__item--red">
                        <div class="card__info">
                            <div class="info-player">
                                <img class = "info-player__num"src="https://img.icons8.com/color/48/000000/monument.png"/>
                                <p class="info-player__name">Culture</p>
                            </div>
                        </div>
                    </li>
                    
                    <li class="card__item card__item--red">
                        <div class="card__info">

                            <div class="info-player">
                                <img class = "info-player__num"src="https://img.icons8.com/color/48/000000/5-star-hotel.png"/>
                                <p class="info-player__name">Hotel</p>
                            </div>
                        </div>
                    </li>
                    
                    <li class="card__item card__item--red">
                        <div class="card__info">
                            <div class="info-player">
                                <img class = "info-player__num"src="https://img.icons8.com/color/48/000000/ferris-wheel.png"/>
                                <p class="info-player__name">Loisirs</p>
                            </div>
                        </div>
                    </li>

                    <li class="card__item card__item--red">
                        <div class="card__info">
                            <div class="info-player">
                                <img class = "info-player__num"src="https://img.icons8.com/color/48/000000/rock-music.png"/>
                                <p class="info-player__name">Musique</p>
                            </div>
                        </div>
                    </li>

                    <li class="card__item card__item--red">
                        <div class="card__info">
                            <div class="info-player">
                                <img class = "info-player__num"src="https://img.icons8.com/color/48/000000/shop.png"/>
                                <p class="info-player__name">Shopping</p>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>

            </section>
        
        </div>
      </div>
    );
  }
}

export default CategoryLogged
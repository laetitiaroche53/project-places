import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render () {
    return (
      <div >
        <nav
          class='navbar is-transparent is-fixed-top is-mobile'
          role='navigation'
          aria-label='main navigation'
        >
          <div class='navbar-brand'>
            <a class='navbar-item' href='https://bulma.io'>
              {/* <img src='https://res.cloudinary.com/djku1z7tk/image/upload/v1553702403/logo-capital.png'/> */}
              <img src='/logo-capital.png'/>
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
        
        <section class='section'id="valueprop">
            <div class='columns'>
                <div class='column'>
                {/* <img src='https://res.cloudinary.com/djku1z7tk/image/upload/v1553703698/love-place.png' width="70%" height="60%"/> */}
                <img src='/love-place.png' id="headimg" width="70%" height="60%" alt="image"/>
                </div>
                <div class='column'>
                <h1>Save all your favorite places in one place.<br/> Share them only with your friends.</h1>
                <br/>
                <a class="button is-danger"> Get started </a>
                </div>
            </div>
        </section>

        <section class='section'id="steps">
            <div class='columns'>
                <div class='column'>
                <img src='/icon-location.png' width="30%"/>
                <h2>Step 1</h2>
                <p>Did you leave a great experience somewhere ? Then, it's easy ! Just spot the place and save it !</p>
                </div>
                <div class='column'>
                <img src='/icon-list.png' width="25%"/>
                <h2>Step 2</h2>
                <p>Gather all your favorite spots you trust in one and only place and organize them as you want </p>
                </div>
                <div class='column'>
                <img src='/icon-share.png' width="25%"/>
                <h2>Step 3</h2>
                <p>Share your trusted experience with your friends only and discover new ones from them</p>
                </div>
            </div>
        </section>

        <footer class="footer">
            <div class="content has-text-centered">
                <p class="madeby"><strong>GreatSpots</strong> made by <a href="https://jgthms.com">Laetitia</a> and <a href="https://jgthms.com">Archana</a></p>
  </div>
</footer>


      </div>
    )
  }
}

export default Home

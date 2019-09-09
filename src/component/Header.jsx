import React, { Component } from 'react';
import logo from './img/logo.png';

class Header extends Component {
  render() {
    return (
      <div>


        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01" >

            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <img src={logo} width='100' height='50' />
              </li>
            </ul>

            <form class="form-inline my-2 my-lg-0">

              Welcome UserName &nbsp;
      <i class="fa fa fa-user-circle"></i>

            </form>
          </div>
        </nav>








      </div>
    )
  }
}

export default Header
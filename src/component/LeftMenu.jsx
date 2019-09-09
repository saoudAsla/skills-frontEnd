import React, { Component } from 'react';
import prof2 from './img/prof4.png';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

class LeftMenu extends Component {
  render() {
    return (

      <div className="card">
        <div class="card-header">Menu</div>

        <div class="card-body" style={{ margin: 40 }}>
          <img src={prof2} width='120' height='130' />
        </div>

        <ul class="list-group list-group-flush">
          <li class="list-group-item"><Link to={{ pathname: '/home' }}>Home</Link></li>
          <li class="list-group-item"><Link to={{ pathname: '/profile/1' }}>Profile</Link></li>
          <li class="list-group-item"><Link to={{ pathname: '/managerView' }}>Manager View</Link></li>
        </ul>



        <div class="card-body">
          <h5 class="card-title">News</h5>
          <p class="card-text">Assignment info ...</p>
          <p class="card-text">Assignment info ...</p>
          <p class="card-text">Assignment info ...</p>
          <p class="card-text">Assignment info ...</p>
          <p class="card-text">Assignment info ...</p>
          <p class="card-text">Assignment info ...</p>
        </div>


      </div >
    )
  }
}
export default LeftMenu






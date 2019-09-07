import React, { Component } from 'react';
import prof from './img/prof.jpg';
import { BrowserRouter as Router, Link,Route, Switch } from 'react-router-dom'

                class LeftMenu extends Component {
                  render() {
                      return (
                              <div style={{ float:'left', marginTop:40}}>
              
              

<div class="card bg-light mb-3" style={{maxWidth:'18rem'}}>
  <div class="card-header">Menu</div>

  <div class="card-body" style={{margin:40}}>
  <img src={prof}  width='120' height='130'/>
  </div>



   <ul class="list-group list-group-flush">
    <li class="list-group-item"><Link to={{pathname: '/home'}}>Home</Link></li>
    <li class="list-group-item">Profile</li>
    <li class="list-group-item"><Link to={{pathname: '/pendingSkills'}}>Pending Skills</Link></li>
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


</div>
              
                     
                         
                              </div>
                      )
                  }
              }                
export default LeftMenu






import React, { Component } from 'react';
import prof from './img/prof.jpg';

                class LeftMenu extends Component {
                  render() {
                      return (
                              <div style={{ float:'left', marginTop:40}}>
              
              

<div class="card bg-light mb-3" style={{maxWidth:'18rem'}}>
  <div class="card-header">Profile</div>

  <div class="card-body" style={{margin:40}}>
  <img src={prof}  width='120' height='130'/>
  </div>



  { <ul class="list-group list-group-flush">
    <li class="list-group-item">Home</li>
    <li class="list-group-item">Profile</li>
                      </ul> }



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






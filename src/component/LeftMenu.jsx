import React, { Component } from 'react';
import prof2 from './img/prof4.png';
import DataService from '../service/SkillsDataService';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

class LeftMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      assignements: DataService.retrieveAssignementsOfEmployeeById(2),
    }
  }

  render() {
    return (

      <div className="card bg-light">


        <div class="card-body" style={{ margin: 40 }}>
          <img src={prof2} width='120' height='130' />
        </div>

        <ul class="list-group list-group-flush">
          <li class="list-group-item"><Link to={{ pathname: '/home/1' }}>Own Skills</Link></li>
          <li class="list-group-item"><Link to={{ pathname: '/profile/1' }}>Profile</Link></li>
          <li class="list-group-item"><Link to={{ pathname: '/managerView' }}>Manager View</Link></li>
        </ul>




        <div class="card-body">
          <h5 class="card-title">News</h5>
          {
            this.state.assignements.map(
              assignement =>
                <p className="card-text">
                  <br />Project:&nbsp;{assignement.projectName}
                  <br />{assignement.startDate}&nbsp; To &nbsp;{assignement.endDate}
                  <br /><font color={assignement.status == "In Progress" ? "green" : "red"}>{assignement.status}</font>
                </p>
            )
          }
        </div>



      </div >
    )
  }
}
export default LeftMenu






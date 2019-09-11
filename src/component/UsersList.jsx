import React, { Component } from 'react';
import DataService from '../service/SkillsDataService';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class UsersList extends Component{
  constructor(props) {
    super(props)
    this.state = {
        users: DataService.retrieveEmployeesOfManagerById(1),
        
    }
    this.skillsClicked = this.skillsClicked.bind(this)
}

skillsClicked() {
  this.props.history.push(`/home/`)
}

    render(){
        return(

<div class="container" style={{marginTop:200}}>
        <div class="row">
            <div class="col-12">
            
<table class="table table-sm">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Employee</th>
      <th scope="col">Role</th>
      <th scope="col">E-Mail</th>
      <th scope="col">Phone</th>
      <th scope="col" >Office</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {
      this.state.users.map((user)=>
        <tr key={user.id}>
      <th scope="row">
      <img src={user.img} alt=""/>
          <a href="#" class="user-link"> &nbsp; {user.firstName} {user.lastName}</a>
      </th>
      <td style={{verticalAlign: "middle"}}>{user.role}</td>
      <td style={{verticalAlign: "middle"}}>{user.mail}</td>
      <td style={{verticalAlign: "middle"}}>{user.phone}</td>
      <td style={{verticalAlign: "middle"}}>{user.office}</td>
      <td style={{verticalAlign: "middle"}}><Link to={{ pathname: '/EmployeeSkills' }}><button class="btn-primary btn-sm">Skills</button></Link></td>

        </tr>
      )
    }
    

  </tbody>
</table>



    </div>
    </div>
    </div>


        )
    }
}
export default UsersList







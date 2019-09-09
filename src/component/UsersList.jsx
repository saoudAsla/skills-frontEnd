import React, { Component } from 'react';



class UsersList extends Component{
  constructor(props) {
    super(props)
    this.state = {
        users: [
          {id:1,firstName:"Saoud",lastName:"Asla", mail:"employee1@gmail.com",phone:"123-456789",role:"Employee",office:"Nazareth, Israel",img:"https://bootdey.com/img/Content/user_1.jpg"},
          {id:2,firstName:"Amjad",lastName:"Nassar", mail:"employee2@gmail.com",phone:"123-456789",role:"Employee",office:"Nazareth, Israel",img:"https://bootdey.com/img/Content/user_2.jpg"},
          {id:3,firstName:"philip",lastName:"Shwarz", mail:"teemLeader1@gmail.com",phone:"123-456789",role:"Team Leader",office:"Nazareth, Israel",img:"https://bootdey.com/img/Content/user_3.jpg"},

        ],
        
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
      <td style={{verticalAlign: "middle"}}><button class="btn-primary btn-sm">Skills</button></td>

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







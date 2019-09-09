import React, { Component } from 'react';
import PendingSkills from './PendingSkills';
import UsersList from './UsersList';


class ManagerView extends Component{
    render(){
        return(
            <div style={{ float:'right',marginRight:100}}>


              <PendingSkills/>
              <UsersList history= {this.props.history}/>

            </div>
        )
    }
}
export default ManagerView







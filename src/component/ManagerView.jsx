import React, { Component } from 'react';
import PendingSkills from './PendingSkills';
import UsersList from './UsersList';


class ManagerView extends Component {
    render() {
        return (
            <div className="col">

                <PendingSkills />
                <UsersList history={this.props.history} />

            </div>
        )
    }
}
export default ManagerView







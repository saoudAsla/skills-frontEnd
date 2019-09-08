import React, { Component } from 'react';
import prof from './img/prof.jpg';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { employee:{},
     };
    }

    componentDidMount(){

    }

    render() {

        const {name,empID,id,birthDates,email,phone,department,location} = this.state.employee;

        return (
            <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">

            <div className="card-body">
              <div className="card-title mb-4">
                <div className="d-flex justify-content-start">
                  <div className="image-container">
                    <img src={prof} id="imgProfile" alt="Profile" className="img-thumbnail" />
                    <div className="middle">
                      <input type="button" className="btn btn-secondary" id="btnChangePicture" value="Change" />
                      <input type="file"  id="profilePicture" name="file" />
                    </div>
                  </div>
                  <div className="userData ml-3">
                    <h2 className="d-block" id="empName">{name}</h2>

                  </div>
                  <div className="ml-auto">
                    <input type="button" className="btn btn-primary d-none" id="btnDiscard" value="Discard Changes" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="basicInfo-tab" data-toggle="tab" href="#basicInfo" role="tab"
                        aria-controls="basicInfo" aria-selected="true">Basic Info</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="connectedServices-tab" data-toggle="tab" href="#connectedServices"
                        role="tab" aria-controls="connectedServices" aria-selected="false">Assignments </a>
                    </li>
                  </ul>
                  <div className="tab-content ml-1" id="myTabContent">
                    <div className="tab-pane fade show active" id="basicInfo" role="tabpanel"
                      aria-labelledby="basicInfo-tab">


                      <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label >Emplyee ID</label>
                        </div>
                        <div className="col-md-8 col-6" id="empIDInput"></div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label >ID</label>
                        </div>
                        <div className="col-md-8 col-6" id="idInput">

                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label >Birth Date</label>
                        </div>
                        <div className="col-md-8 col-6" id="dateInput">

                        </div>
                      </div>
                      <hr />


                      <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label >Email</label>
                        </div>
                        <div className="col-md-8 col-6" id="emailInput">

                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label >Phone</label>
                        </div>
                        <div className="col-md-8 col-6" id="phoneInput">

                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label >Department</label>
                        </div>
                        <div className="col-md-8 col-6" id="departmentInput">
                            
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label >Location </label>
                        </div>
                        <div className="col-md-8 col-6" id="locationInput">

                        </div>
                      </div>
                      <hr />

                    </div>
                    <div className="tab-pane fade" id="connectedServices" role="tabpanel"
                      aria-labelledby="ConnectedServices-tab">
                      <div id="tableContainer" className="mx-auto">
                        <table className="table table-hover">
                          <thead className="table-dark">
                            <tr>
                              <th>Project ID</th>
                              <th>Project Name</th>
                              <th>Start Date</th>
                              <th>End Date</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>
      </div>
      </div>
        );
    }
}

export default Profile;
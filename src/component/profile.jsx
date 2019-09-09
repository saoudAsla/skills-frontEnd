import React, { Component } from 'react';
import prof from './img/prof.jpg';
import InfoLabel from './infoLabel';
import Table from './Table';
import EmployeeDataService from '../service/ProfileService';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { profileImage: null, employee: {}, assignments: [] };
  }

  componentDidMount() {


    const employee = EmployeeDataService.retrieveProfilePicture();
    const assignments = EmployeeDataService.retrieveEmployeeAssignments();
    this.setState({ employee, assignments });
    const { id } = this.props.match.params;
    console.log(employee);
    //const {id} = this.props.match;
    /**
    const response = await fetch('link', {
      method:"GET",
      headers: { auth: '', Accept: 'application/json' }
    });
    const employee = await response.json();

    const assignmentsReq = fetch(`assignments link`)
    const image = fetch(`image`);
    const [imageBuffer, assignmentsRes] = awiat Promise.all(image, assignments);

    const [profileImage, assignments] =  awiat Promise.all(imageBuffer.arrayBuffer(), assignmentsRes.json());
    
    this.setState({profileImage, employee, assignments})
     */
  }

  render() {
    const { profileImage, assignments, employee } = this.state;

    const {
      name,
      empID,
      id,
      birthDates,
      email,
      phone,
      department,
      location
    } = employee;

    return (

      <div className="card">
        <div className="card-body">
          <div className="card-title mb-4">
            <div className="d-flex justify-content-start">
              <div className="image-container">
                <img
                  src={profileImage ? profileImage : prof}
                  width="150px"
                  height="150px"
                  id="imgProfile"
                  alt="Profile"
                  className="img-thumbnail"
                />
                <div className="middle">
                  <input
                    type="button"
                    className="btn btn-secondary"
                    id="btnChangePicture"
                    value="Change"
                  />
                  <input type="file" id="profilePicture" name="file" />
                </div>
              </div>
              <div className="userData ml-3">
                <h2 className="d-block" style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold"
                }}>
                  {name}
                </h2>
              </div>
              <div className="ml-auto">
                <input
                  type="button"
                  className="btn btn-primary d-none"
                  id="btnDiscard"
                  value="Discard Changes"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="basicInfo-tab"
                    data-toggle="tab"
                    href="#basicInfo"
                    role="tab"
                    aria-controls="basicInfo"
                    aria-selected="true"
                  >
                    Basic Info
                        </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="connectedServices-tab"
                    data-toggle="tab"
                    href="#connectedServices"
                    role="tab"
                    aria-controls="connectedServices"
                    aria-selected="false"
                  >
                    Assignments
                        </a>
                </li>
              </ul>
              <div className="tab-content ml-1" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="basicInfo"
                  role="tabpanel"
                  aria-labelledby="basicInfo-tab"
                >
                  <InfoLabel label="Emplyee ID" content={empID} />
                  <hr />
                  <InfoLabel label="ID" content={id} />
                  <hr />
                  <InfoLabel label="Birth Date" content={birthDates} />
                  <hr />
                  <InfoLabel label="Email" content={email} />
                  <hr />
                  <InfoLabel label="Phone" content={phone} />
                  <hr />
                  <InfoLabel label="Department" content={department} />
                  <hr />
                  <InfoLabel label="Location" content={location} />
                  <hr />
                </div>
                <div
                  className="tab-pane fade"
                  id="connectedServices"
                  role="tabpanel"
                  aria-labelledby="ConnectedServices-tab"
                >
                  <Table
                    columns={[
                      'Project ID',
                      'Project Name',
                      'Start Date',
                      'End Date',
                      'Status'
                    ]}
                    content={assignments}
                  />
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

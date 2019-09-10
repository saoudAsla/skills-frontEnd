import React, { Component } from 'react';
import prof from './img/prof.jpg';
import InfoLabel from './infoLabel';
import EmployeeDataService from '../service/ProfileService';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { profileImage: null, employee: {} };
  }

  /*async*/
  componentDidMount() {

    const employee = EmployeeDataService.retrieveProfile();
    this.setState({ employee });
    console.log(employee)
    /**
    const {id} = props.match.params;
    let empolyee = null;
    try{
       employee = await SkillServices.retrieveProfile(id);
      this.setState({profileImage, employee, assignments})
    }catch(error){
      // handle error in a dialog
    }
    if(employee)
    try{
        const imageResponse = await SkillServices.retrieveProfilePicture(id);
        //parse image
        this.setState({profileImage})

    }catch(err){
      console.log(err)
    }
    
     */
  }

  render() {
    const { profileImage, employee } = this.state;

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

              </div>
            </div>
          </div>


        </div>
      </div>


    );
  }
}

export default Profile;

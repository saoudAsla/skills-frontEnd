import React, { Component } from 'react';
import DataService from '../service/SkillsDataService';


class PendingSkills extends Component {
  constructor(props) {
    super(props)
    this.state = {

      productSkillsReq: DataService.retrieveRequestedProductSkillsConfirmation(),

      technicalSkillsReq: DataService.retrieveRequestedTechnicalSkillsConfirmation(),
        
    }
  }

  render() {
    return (
      <div class="container">


        <div class="row">
          <div class="col">
            <div class="card">

              <div class="card-body">


                <div class="row">
                  <div class="col-12">
                    <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active" id="technicalSkills-tab" data-toggle="tab" href="#technicalSkills" role="tab" aria-selected="true">Required Technical Skills confirmations</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="productSkills-tab" data-toggle="tab" href="#productSkills" role="tab" aria-selected="false">Required Product Skills confirmations</a>
                      </li>
                    </ul>
                    <div class="tab-content ml-1" id="myTabContent">
                      <div class="tab-pane fade show active" id="technicalSkills" role="tabpanel" aria-labelledby="technicalSkills-tab">


                        <table class="table table-hover table-sm">
                          <thead class="thead-dark">
                            <tr>
                              <th>User Name</th>
                              <th>Skill Name</th>
                              
                              <th>Request Date</th>

                              <th>Grade</th>
                              <th>Comment</th>
                              <th>Reject/Approve</th>
                            </tr>
                          </thead>
                          <tbody id="technicalReq">
                            {

                              this.state.technicalSkillsReq.map(
                                request =>



                                  <tr key={request.userName}>
                                    <td>{request.userName}</td>
                                    <td>{request.skillName}</td>
                                    
                                    <td>{request.skillLastUpdatedDate}</td>
                                    <td>{request.grade}</td>
                                    <td><input type="text"></input></td>
                                    <td><button class="btn btn-danger btn-sm"> Reject </button>&nbsp;<button class="btn btn-success btn-sm">approve</button></td>
                                  </tr>

                              )
                            }




                          </tbody>
                        </table>

                      </div>
                      <div class="tab-pane fade" id="productSkills" role="tabpanel" aria-labelledby="productSkills-tab">
                        <div id="tableContainer" class="mx-auto">

                          <table class="table table-hover table-sm">
                            <thead class="thead-dark">
                              <tr>
                                <th>User Name</th>
                                <th>Skill Name</th>
                                <th>Start Date</th>
                                <th>Last Updated Date</th>

                                <th>Grade</th>
                                <th>Comment</th>
                                <th>Reject/Approve</th>
                              </tr>
                            </thead>
                            <tbody id="productReq">


                              {

                                this.state.productSkillsReq.map(
                                  request =>



                                    <tr key={request.userName}>
                                      <td>{request.userName}</td>
                                      <td>{request.skillName}</td>
                                      <td>{request.skillStartDate}</td>
                                      <td>{request.skillLastUpdatedDate}</td>
                                      <td>{request.grade}</td>
                                      <td><input type="text"></input></td>
                                      <td><button class="btn btn-danger btn-sm"> Reject </button>&nbsp;<button class="btn btn-success btn-sm">approve</button></td>
                                    </tr>

                                )
                              }

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
    )
  }
}
export default PendingSkills







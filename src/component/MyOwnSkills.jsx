import React, { Component } from 'react';
import Chart from 'react-google-charts';

import DataService from "../service/SkillsDataService"


class MyOwnSkills extends Component {
  constructor(props) {
    super(props)
    this.state = {

      productSkills: DataService.retrieveProductSkillsById(2),

      technicalSkills: DataService.retrieveProductSkillsById(2),

    }

    this.updateSkill = this.updateSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
  }

  updateSkill(el) {
    //TODO
  }
  deleteSkill(el) {
    //TODO
  }

  render() {
    return (
      <div>




        <div className="container">


          <div className="row">
            <div className="col">
              <div className="card">

                <div className="card-body">


                  <div className="row">
                    <div className="col-12">
                      <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="technicalSkills-tab" data-toggle="tab" href="#technicalSkills" role="tab" aria-selected="true">Technical Skills confirmations</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="productSkills-tab" data-toggle="tab" href="#productSkills" role="tab" aria-selected="false">Product Skills confirmations</a>
                        </li>
                      </ul>

                      <div className="tab-content ml-1" id="myTabContent">

                        <div className="tab-pane fade show active" id="technicalSkills" role="tabpanel" aria-labelledby="technicalSkills-tab">
                          <div className="google-chart">
                            <Chart
                              width={800}
                              height={'300px'}
                              chartType="AreaChart"
                              loader={<div>Loading Chart</div>}
                              data={[
                                ['Year', 'Sales', 'Expenses'],
                                ['2013', 1, 2],
                                ['2014', 2, 4],
                                ['2015', 3, 4],
                                ['2016', 5, 4],
                              ]}
                              options={{
                                title: 'Technical Skills Over Time',
                                hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                                vAxis: { minValue: 0 },
                                // For the legend to fit, we make the chart area smaller
                                chartArea: { width: '50%', height: '70%' },
                                // lineWidth: 25
                              }}
                            />
                          </div>
                          <table className="table table-hover table-sm">
                            <thead className="thead-dark">
                              <tr>
                                <th>Skill</th>
                                <th>Date</th>
                                <th>Grade</th>
                                <th>Status</th>
                                <th>Comment</th>
                                <th>Edit</th>
                              </tr>
                            </thead>
                            <tbody id="technicalReq">
                              {

                                this.state.technicalSkills.map(
                                  (skill, index) =>
                                    <tr key={index}>
                                      <td>{skill.name}</td>
                                      <td>{skill.date}</td>
                                      <td>{skill.grade}</td>
                                      <td>{skill.status}</td>
                                      <td>{skill.comment}</td>
                                      <td><button className="btn btn-danger btn-sm"> Delete </button>&nbsp;<button className="btn btn-alert btn-sm">Update</button></td>
                                    </tr>
                                )
                              }
                            </tbody>
                          </table>
                        </div>
                        <div className="tab-pane fade active" id="productSkills" role="tabpanel" aria-labelledby="productSkills-tab">

                          <div >
                            <Chart
                              width={800}
                              height={'300px'}
                              chartType="AreaChart"
                              loader={<div>Loading Chart</div>}
                              data={[
                                ['Year', 'Billing', 'CRM'],
                                ['2013', 1, 0],
                                ['2013', 1, 2],
                                ['2014', 1, 2],
                                ['2015', 2, 3],
                                ['2016', 2, 5],
                              ]}
                              options={{
                                title: 'Product Skills Over Time',
                                hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                                vAxis: { minValue: 0 },
                                // For the legend to fit, we make the chart area smaller
                                chartArea: { width: '50%', height: '70%' },
                                // lineWidth: 25
                              }}
                            />

                          </div>

                          <table className="table table-hover table-sm">
                            <thead className="thead-dark">
                              <tr>
                                <th>Skill</th>
                                <th>Date</th>
                                <th>Grade</th>
                                <th>Status</th>
                                <th>Comment</th>
                                <th>Edit</th>
                              </tr>
                            </thead>
                            <tbody id="productReq">

                              {
                                this.state.productSkills.map(
                                  (skill, index) =>
                                    <tr key={index}>
                                      <td>{skill.name}</td>
                                      <td>{skill.date}</td>
                                      <td>{skill.grade}</td>
                                      <td>{skill.status}</td>
                                      <td>{skill.comment}</td>
                                      <td><button className="btn btn-danger btn-sm"> Delete </button>&nbsp;<button className="btn btn-alert btn-sm">Update</button></td>
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



      </div >
    )
  }
}
export default MyOwnSkills







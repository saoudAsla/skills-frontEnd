import React, { Component } from 'react';
import Chart from 'react-google-charts';

import DataService from "../service/SkillsDataService"


class MyOwnSkills extends Component{
    constructor(props) {
        super(props)
        this.state = {
    
          productSkills:  DataService.retrieveProductSkillsById(2),
    
          technicalSkills: DataService.retrieveProductSkillsById(2),
            
        }
      }

    render(){
        return(
            <div>


            
      
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
<div class="google-chart">
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




                        <table class="table table-hover table-sm">
                          <thead class="thead-dark">
                            <tr>	
                              <th>Skill</th>
                              <th>Date</th>
                              
                              <th>Grade</th>

                              <th>Status</th>
                              <th>Comment</th>

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
                                    </tr>
    
                            )
                          }
                            




                          </tbody>
                        </table>

                      </div>



 <div class="tab-pane fade active" id="productSkills" role="tabpanel" aria-labelledby="productSkills-tab">

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

                          <table class="table table-hover table-sm">
                            <thead class="thead-dark">
                              <tr>
                              <th>Skill</th>
                              <th>Date</th>
                              
                              <th>Grade</th>

                              <th>Status</th>
                              <th>Comment</th>
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
export default MyOwnSkills







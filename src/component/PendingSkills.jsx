import React, { Component } from 'react';



class PendingSkills extends Component{
    constructor(props) {
        super(props)
        this.state = {
        
          productSkillsReq : [
            {
              skillName: "CRM",
              skillStartDate: "01/08/2018",
              grade: "4",
              skillLastUpdatedDate: "01/09/2019",
              userName: "Philip Sadlo"
            },
            {
              skillName: "Billing",
              skillStartDate: "01/09/2018",
              grade: "3",
              skillLastUpdatedDate: "01/09/2019",
              userName: "Susanne Kroemker"
            },
            {
              skillName: "OMS",
              skillStartDate: "01/08/2019",
              grade: "3",
              skillLastUpdatedDate: "01/08/2019",
              userName: "Barbara schwarz"
            },
          
          ],
          
      
      
      technicalSkillsReq : [
        {
          skillName: "Java",
          skillStartDate: "01/08/2018",
          grade: "4",
          skillLastUpdatedDate: "01/09/2019",
          userName: "Elias Nijim"
        },
        {
          skillName: "Python",
          skillStartDate: "01/09/2018",
          grade: "3",
          skillLastUpdatedDate: "01/09/2019",
          userName: "Saoud Asla"
        },
        {
          skillName: "C#",
          skillStartDate: "01/08/2019",
          grade: "2",
          skillLastUpdatedDate: "01/08/2019",
          userName: "Jeres Zamel"
        },
        {
          skillName: "C++",
          skillStartDate: "01/08/2019",
          grade: "3",
          skillLastUpdatedDate: "01/08/2019",
          userName: "Amjad Nassar"
        },
        {
          skillName: "C++",
          skillStartDate: "01/06/2017",
          grade: "4",
          skillLastUpdatedDate: "1/7/2019",
          userName: "majd Nassar"
        },
      
      ]
        }
    }

    render(){
        return(
            <div style={{ float:'right', marginBottom:100}}>


            
            

<div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">

                    <div class="card-body">
                        

                        <div class="row">
                            <div class="col-12">
                                <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="technicalSkills-tab" data-toggle="tab" href="#technicalSkills" role="tab"  aria-selected="true">Required Technical Skills confirmations</a>
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
                                                        <th>Start Date</th>
                                                        <th>Last Updated Date</th>
                                                        
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
                                            <td>{request.skillStartDate}</td>
                                            <td>{request.skillLastUpdatedDate}</td>
                                            <td>{request.skillGrade}</td>
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
                                            <td>{request.skillGrade}</td>
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

    



            </div>
        )
    }
}
export default PendingSkills







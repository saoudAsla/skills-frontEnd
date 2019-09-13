import React, { Component } from 'react';
import DataService from "../service/SkillsDataService"
import SkillsOverViewTab from './SkillsOverViewTab';

const productSkills = "productSkills";
const technicalSkills = "technicalSkills";

class MyOwnSkills extends Component {

  constructor() {
    super();
    this.state = {
      currentTab: technicalSkills,
      [productSkills]: [],
      [technicalSkills]: [],
    }
    this.submitUpdate = this.submitUpdate.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.switchTab = this.switchTab.bind(this);
  }

  componentDidMount() {

    /*try {
      if (this.state.currentTab === technicalSkills) {
        const data = await DataService.retrieveTechnicalSkillsById(3);

        this.setState({ technicalSkills: data })
      } else if (this.state.currentTab === productSkills) {
        const data = await DataService.retrieveProductSkillsById(3);

        this.setState({ productSkills: data })

      }

    } catch (error) {
      console.log(error.message)
    }*/

    this.setState({
      productSkills: DataService.retrieveProductSkillsById(2),
      technicalSkills: DataService.retrieveTechnicalSkillsById(2)
    })
  }

  async deleteSkill(type, id) {



    /* try {
       const skillToUpdate =  this.state[type].find(skill => skill.name === id);
       skillToUpdate.grade = grade;
       const response = await DataService.removeUnapprovedSkillById(skillToUpdate)
       
     } catch (error) {
       // display error ui
     }finally{
       if (type === productSkills){
         const data = await DataService.retrieveProductSkillsById('userid');
         
         this.setState({ [type]: data })
        
     } else if (type === technicalSkills) {
         const data = await DataService.retrieveTechnicalSkillsById('userid');
         
         this.setState({ [type]: response.data })
         
       }
     }*/

    this.setState({ [type]: this.state[type].filter(skill => skill.employeeSkillId !== id) })
  }

  switchTab(type) {
    /*if (!this.state[type]) {
      if (this.state.currentTab === technicalSkills) {
        this.setState({ technicalSkills: DataService.retrieveTechnicalSkillsById(2), currentTab: type })
      } else if (this.state.currentTab === productSkills) {
        this.setState({ productSkills: DataService.retrieveProductSkillsById(2), currentTab: type })

      }

    } else*/
    this.setState({ currentTab: type })
  }

  async submitUpdate(type, id, grade) {
    /*try {
      const skillToUpdate =  this.state[type].find(skill => skill.name === id);
      skillToUpdate.grade = grade;
      const response = await DataService.updateSkillByIdSkill(skillToUpdate)
      
    } catch (error) {
      // display error ui
    }finally{
      if (type === productSkills){
        const response = await DataService.retrieveProductSkillsById('3');
        if (response.status === 200) {
          this.setState({ [type]: response.data })
        }
    } else if (type === technicalSkills) {
        const response = await DataService.retrieveTechnicalSkillsById('3');
        if (response.status === 200) {
          this.setState({ [type]: response.data })
        }
      }
    }*/
    console.log(type, id, grade)
    this.setState({
      [type]: this.state[type].map(skill => {
        if (skill.employeeSkillId === id) {
          skill.level = grade;
        }
        return skill;
      })
    });


  }

  render() {

    return (
      <div>
        <div className="container" >
          <div className="col card">
            <div className="card-body">
              <div className="col-12">
                <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="technicalSkills-tab" data-toggle="tab" href="#technicalSkills" role="tab" aria-selected="true" onClick={e => this.switchTab(technicalSkills)}>Technical Skills confirmations</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="productSkills-tab" data-toggle="tab" href="#productSkills" role="tab" aria-selected="false" onClick={e => this.switchTab(productSkills)}>Product Skills confirmations</a>
                  </li>
                </ul>

                <div className="tab-content ml-1" id="myTabContent">
                  <SkillsOverViewTab type={this.state.currentTab} skills={this.state[this.state.currentTab]} deleteClick={this.deleteSkill} submitUpdate={this.submitUpdate} />
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
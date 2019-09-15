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
    this.addSkill = this.addSkill.bind(this);
    this.switchTab = this.switchTab.bind(this);
  }

  async componentDidMount() {

    try {
      // if (this.state.currentTab === technicalSkills) {
      // const data = await DataService.retrieveTechnicalSkillsById(3);

      //this.setState({ technicalSkills: data })
      //  } else if (this.state.currentTab === productSkills) {
      // const datproductsa = await DataService.retrieveProductSkillsById(3);

      const productData = await DataService.retrieveProductSkillsById(3);
      const technicalData = await DataService.retrieveTechnicalSkillsById(3);
      //const [technicalData, productData] = await Promise.all(DataService.retrieveTechnicalSkillsById(3), DataService.retrieveProductSkillsById(3))

      // console.log(await DataService.retrieveTechnicalSkillsById(3))
      this.setState({ technicalSkills: technicalData, productSkills: productData })

      //}

    } catch (error) {
      console.log(error.message)
    }

    /*this.setState({
      productSkills: DataService.retrieveProductSkillsById(2),
      technicalSkills: DataService.retrieveTechnicalSkillsById(2)
    })*/
  }

  async deleteSkill(type, id) {



    try {

      const response = await DataService.removeUnapprovedSkillById(id)

    } catch (error) {
      // display error ui
    } finally {
      if (type === productSkills) {
        const data = await DataService.retrieveProductSkillsById(3);

        this.setState({ [type]: data })

      } else if (type === technicalSkills) {
        const data = await DataService.retrieveTechnicalSkillsById(3);

        this.setState({ [type]: data })

      }
    }

    // this.setState({ [type]: this.state[type].filter(skill => skill.employeeSkillId !== id) })
  }

  async addSkill(skillId, date, level) {

    console.log(skillId, date, level)
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
    try {

      const response = await DataService.updateSkillByIdSkill(id, grade)

    } catch (error) {
      // display error ui
    } finally {
      if (type === productSkills) {
        const response = await DataService.retrieveProductSkillsById('3');

        this.setState({ [type]: response })

      } else if (type === technicalSkills) {
        const response = await DataService.retrieveTechnicalSkillsById('3');

        this.setState({ [type]: response })

      }
    }
    console.log(type, id, grade)
    /*this.setState({
      [type]: this.state[type].map(skill => {
        if (skill.employeeSkillId === id) {
          skill.level = grade;
        }
        return skill;
      })
    });*/


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
                  <SkillsOverViewTab type={this.state.currentTab} skills={this.state[this.state.currentTab]} deleteClick={this.deleteSkill} submitUpdate={this.submitUpdate} submitNewSkill={this.addSkill} />
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
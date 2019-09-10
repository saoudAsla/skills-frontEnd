import Chart from 'react-google-charts';
import SkillsDataService from '../service/SkillsDataService';
import ViewSkillsTable from './ViewSkillsTable';
import SkillsTabContent from './SkillsTabContent';

var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;





class SkillsOverTime extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skillsHistory: [{ "id": 1 }]
      //[[3,4],[1,2]]

    }
  }
  componentDidMount() {
    //this.refreshData();
  }


  refreshData() {
    let data = SkillsDataService.retrieveAllSkills("userName")

    this.setState({ skillsHistory: data })
    //{this.state.skillsHistory[0].id}
  }



  render() {
    return (


      <div className="col-12">
        <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="basicInfo-tab"
              data-toggle="tab"
              href="#technicalSkills"
              role="tab"
              aria-controls="technicalSkills"
              aria-selected="true"
            >
              Technical Skills
                        </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="connectedServices-tab"
              data-toggle="tab"
              href="#productSkills"
              role="tab"
              aria-controls="productSkills"
              aria-selected="false"
            >
              Product Skills
             </a>
          </li>
        </ul>
        <div className="tab-content ml-1">
          <div
            className="tab-pane fade show active"
            id="technicalSkills"
            role="tabpanel"
            aria-labelledby="basicInfo-tab"
          >
            <SkillsTabContent

              name="Technical"

              chartData={[
                ['Year', 'Sales', 'Expenses'],
                ['2013', 1, 2],
                ['2014', 2, 4],
                ['2015', 3, 4],
                ['2016', 5, 4],
              ]}
              skills={this.state.skillsHistory}
            />
          </div>

          <div
            className="tab-pane fade"
            id="productSkills"
            role="tabpanel"
            aria-labelledby="ConnectedServices-tab"
          >

            <SkillsTabContent name="Products" chartData={[
              ['Year', 'Billing', 'CRM'],
              ['2013', 1, 0],
              ['2013', 1, 2],
              ['2014', 1, 2],
              ['2015', 2, 3],
              ['2016', 2, 5],
            ]}
              skills={[]} />
          </div>

        </div>
      </div>
    )
  }
}
export default SkillsOverTime;
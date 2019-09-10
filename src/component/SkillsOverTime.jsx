import SkillsDataService from '../service/SkillsDataService';
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
      employeeID: null,

      //[[3,4],[1,2]]

    }
  }
  componentDidMount() {
    //const { id } = this.props.match.params;

    //this.setState({employeeID :id})
    //this.refreshData(id);
  }


  refreshData(id) {
    let data = SkillsDataService.retrieveAllSkills(id)

    this.setState({ employeeID: id, skillsHistory: data })
    //{this.state.skillsHistory[0].id}
  }



  render() {

    return (


      <div >
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
        <div className="tab-content ml-1" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="technicalSkills"
            role="tabpanel"
            aria-labelledby="technicalSkills-tab"
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

            />
          </div>

          <div
            className="tab-pane fade "
            id="productSkills"
            role="tabpanel"
            aria-labelledby="productSkills-tab"
          >

            <SkillsTabContent name="Products" chartData={[
              ['Year', 'Billing', 'CRM'],
              ['2013', 1, 0],
              ['2013', 1, 2],
              ['2014', 1, 2],
              ['2015', 2, 3],
              ['2016', 2, 5],
            ]}
            />


          </div>

        </div>
      </div>

    )
  }
}
export default SkillsOverTime;
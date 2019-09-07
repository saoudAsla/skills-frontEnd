import Chart from 'react-google-charts';
import SkillsDataService from '../service/SkillsDataService';

var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;





class SkillsOverTime extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skillsHistory: [{"id":1}]
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
                <div style={{ float:'right'}}>



<div>

<div >
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

</div>



                </div>
        )
    }
}
export default SkillsOverTime;
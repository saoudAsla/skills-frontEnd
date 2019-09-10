import React from 'react';
import ViewSkillsTable from './ViewSkillsTable';
import Chart from 'react-google-charts';


const SkillsTabContent = ({ name, chartData }) => {
    return (
        <div className="media">
            <div className="media-body">
                <div className="row">
                    <Chart
                        width="800px"
                        height="300px"
                        chartType="AreaChart"
                        loader={<div>Loading Chart</div>}
                        data={chartData}
                        options={{
                            title: `${name} Skills Over Time`,
                            hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                            vAxis: { minValue: 0 },
                            // For the legend to fit, we make the chart area smaller
                            chartArea: { width: '50%', height: '70%' },
                            // lineWidth: 25
                        }}
                    />
                </div>

                <div className="row-sm-12" style={{ marginTop: "10px" }}>
                    <ViewSkillsTable type={name} />
                </div>
            </div>

        </div>
    );
}

export default SkillsTabContent;
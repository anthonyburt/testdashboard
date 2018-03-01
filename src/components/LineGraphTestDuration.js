import React from 'react'
import { VictoryChart, VictoryLine, VictoryLegend, VictoryAxis, VictoryLabel } from 'victory'

class LineGraphTestDuration extends React.Component {
	render () {

        return (
            <VictoryChart
                animate={{
                    duration: 1000,
                    onLoad: { duration: 500 }
                }}
            >
                <VictoryAxis axisLabelComponent
                    style={{
                        tickLabels: { angle: -80, fontSize: 10, padding: 5}
                    }}
                    offsetX={-100}
                />
                <VictoryAxis/>
                <VictoryAxis dependentAxis />
                <VictoryLegend x={90} y={0}
                    titleOrientation="left"
                    orientation="horizontal"
                    title="Test Failures per Day"
                    centerTitle
                    gutter={40}
                    style={{ border: { stroke: "black" }, title: {fontSize: 10 } }}
                    colorScale={[ "#891ebf", "#4286f4" ]}
                    data={[
                        { name: "Ecomm" }
                    ]}
                />

                <VictoryLine
                    style={{
                        data: { stroke: "#891ebf" },
                        parent: { border: "3px solid #ccc"},
                    }}
                    data={[
                        { x: "2/3/18",  y: 30 },
                        { x: "2/10/18", y: 25 },
                        { x: "2/17/18", y: 20 },
                        { x: "2/24/18", y: 15 },
                        { x: "3/3/18",  y: 10 },
                        { x: "3/10/18", y: 7 },
                        { x: "3/17/18", y: 3 },
                        { x: "3/24/18",  y: 15 },
                        { x: "3/31/18", y: 14 },
                        { x: "4/7/18", y: 18 },
                        { x: "4/14/18", y: 5 },
                        { x: "4/21/18",  y: 4 },
                        { x: "4/28/18", y: 7 },
                        { x: "5/5/18", y: 3 }
                    ]}
                />
            </VictoryChart>
        )
	}
}

export default LineGraphTestDuration
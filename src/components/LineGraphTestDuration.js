import React from 'react'
import { VictoryChart, VictoryLine, VictoryLegend, VictoryAxis, VictoryLabel } from 'victory'

class LineGraphTestDuration extends React.Component {
	render () {

    return (
            <VictoryChart
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                }}
            >
                <VictoryAxis axisLabelComponent
                    style={{
                        tickLabels: { angle: -40, fontSize: 10, padding: 15}
                    }}
                    offsetX={-100}
                />
                <VictoryAxis/>
                <VictoryAxis dependentAxis />
                <VictoryLegend x={90} y={0}
                    titleOrientation="left"
                    orientation="horizontal"
                    title="Test Runs per Week"
                    centerTitle
                    gutter={20}
                    style={{ border: { stroke: "black" }, title: {fontSize: 10 } }}
                    colorScale={[ "#891ebf", "#4286f4" ]}
                    data={[
                        { name: "Selenium" },
                        { name: "API" }
                    ]}
                />

                <VictoryLine
                     interpolation='natural'
                    style={{
                        data: { stroke: "#891ebf" },
                        parent: { border: "3px solid #ccc"},
                    }}
                    data={[
                        { x: "2/02/18",  y: 0 },
                        { x: "2/10/18", y: 20 },
                        { x: "2/17/18", y: 30 },
                        { x: "2/24/18", y: 70 },
                        { x: "3/3/18",  y: 80 },
                        { x: "3/10/18", y: 90 },
                        { x: "3/17/18", y: 100 },
                        { x: "3/24/18",  y: 150 }
                    ]}
                />
                <VictoryLine
                    interpolation='natural'
                    style={{
                        data: { stroke: "#4286f4" },
                        parent: { border: "3px solid #ccc"}
                    }}
                    data={[
                        { x: "2/02/18",  y: 0 },
                        { x: "2/10/18", y: 5 },
                        { x: "2/17/18", y: 10 },
                        { x: "2/24/18", y: 15 },
                        { x: "3/3/18",  y: 20 },
                        { x: "3/10/18", y: 40 },
                        { x: "3/17/18", y: 60 },
                        { x: "3/24/18",  y: 80 }
                    ]}
                />
            </VictoryChart>
        )
	}
}

export default LineGraphTestDuration
import React from 'react'
import { VictoryChart, VictoryLine, VictoryLegend, VictoryAxis, VictoryLabel } from 'victory'

class LineGraph extends React.Component {
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
                    title="Test Runs per Week"
                    centerTitle
                    gutter={20}
                    style={{ border: { stroke: "black" }, title: {fontSize: 10 } }}
                    colorScale={[ "#891ebf", "#4286f4" ]}
                    data={[
                        { name: "Ecomm" },
                        { name: "Payments" }
                    ]}
                />

                <VictoryLine
                    style={{
                        data: { stroke: "#891ebf" },
                        parent: { border: "3px solid #ccc"},
                    }}
                    data={[
                        { x: "2/3/18",  y: 4 },
                        { x: "2/10/18", y: 2 },
                        { x: "2/17/18", y: 3 },
                        { x: "2/24/18", y: 5 },
                        { x: "3/3/18",  y: 4 },
                        { x: "3/10/18", y: 7 },
                        { x: "3/17/18", y: 3 },
                        { x: "3/24/18",  y: 4 },
                        { x: "3/31/18", y: 2 },
                        { x: "4/7/18", y: 3 },
                        { x: "4/14/18", y: 5 },
                        { x: "4/21/18",  y: 4 },
                        { x: "4/28/18", y: 7 },
                        { x: "5/5/18", y: 3 }
                    ]}
                />
                <VictoryLine
                    style={{
                        data: { stroke: "#4286f4" },
                        parent: { border: "3px solid #ccc"}
                    }}
                    data={[
                        { x: "2/3/18",  y: 3 },
                        { x: "2/10/18", y: 5 },
                        { x: "2/17/18", y: 6 },
                        { x: "2/24/18", y: 2 },
                        { x: "3/3/18",  y: 1 },
                        { x: "3/10/18", y: 7 },
                        { x: "3/17/18", y: 5 },
                        { x: "3/24/18",  y: 2 },
                        { x: "3/31/18", y: 5 },
                        { x: "4/7/18", y: 6 },
                        { x: "4/14/18", y: 2 },
                        { x: "4/21/18",  y: 7 },
                        { x: "4/28/18", y: 2 },
                        { x: "5/5/18", y: 1 }
                    ]}
                />
            </VictoryChart>
        )
	}
}

export default LineGraph
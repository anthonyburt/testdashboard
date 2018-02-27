import React from 'react'
import { VictoryChart, VictoryLine, VictoryLegend } from 'victory'

class LineGraph extends React.Component {
	render () {

        return (
            <VictoryChart
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                }}
            >
                <VictoryLegend x={135} y={40}
                    orientation="horizontal"
                    gutter={20}
                    style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
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
                        { x: "Sun.", y: 4 },
                        { x: "Mon.", y: 2 },
                        { x: "Tues.", y: 3 },
                        { x: "Wed.", y: 5 },
                        { x: "Thur.", y: 4 },
                        { x: "Fri.", y: 7 },
                        { x: "Sat.", y: 3 }
                    ]}
                />
                <VictoryLine
                    style={{
                        data: { stroke: "#4286f4" },
                        parent: { border: "3px solid #ccc"}
                    }}
                    data={[
                        { x: "Sun.", y: 7 },
                        { x: "Mon.", y: 6 },
                        { x: "Tues.", y: 5 },
                        { x: "Wed.", y: 4 },
                        { x: "Thur.", y: 3 },
                        { x: "Fri.", y: 2 },
                        { x: "Sat.", y: 7 }
                    ]}
                />
            </VictoryChart>
        )
	}
}

export default LineGraph
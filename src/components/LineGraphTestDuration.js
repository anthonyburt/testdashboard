import React from 'react'
import { VictoryChart, VictoryLine, VictoryLegend, VictoryAxis, VictoryScatter } from 'victory'

class LineGraphTestDuration extends React.Component {
	render () {

	const selenium
            = [
                    { x: "2/02/18",  y: 0 },
                    { x: "2/10/18", y: 20 },
                    { x: "2/17/18", y: 30 },
                    { x: "2/24/18", y: 70 },
                    { x: "3/3/18",  y: 80 },
                    { x: "3/10/18", y: 90 },
                    { x: "3/17/18", y: 100 },
                    { x: "3/24/18",  y: 150 }
            ]

    const api
            = [
                    { x: "2/02/18",  y: 0 },
                    { x: "2/10/18", y: 5 },
                    { x: "2/17/18", y: 10 },
                    { x: "2/24/18", y: 15 },
                    { x: "3/3/18",  y: 20 },
                    { x: "3/10/18", y: 40 },
                    { x: "3/17/18", y: 60 },
                    { x: "3/24/18",  y: 80 }
            ]

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
                <VictoryAxis dependentAxis
                    label="Time (hr)"
                    style={{
                        axisLabel: {fontSize: 10, padding: 35}
                    }}
                 />
                <VictoryLegend x={150} y={0}
                    titleOrientation="left"
                    orientation="horizontal"
                    title="Test Runs"
                    centerTitle
                    gutter={20}
                    style={{ border: { stroke: "black" }, title: {fontSize: 10 } }}
                    colorScale={[ "#334d5c", "#45b29d" ]}
                    data={[
                        { name: "UI" },
                        { name: "API" }
                    ]}
                />

                <VictoryLine
                     interpolation='natural'
                    style={{
                        data: { stroke: "#334d5c" },
                        parent: { border: "3px solid #ccc"},
                    }}
                    data={selenium}
                />
                <VictoryScatter
                    style={{ data: { fill: "#334d5c" } }}
                    size={4}
                    data={selenium}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}
                />

                <VictoryLine
                    interpolation='natural'
                    style={{
                        data: { stroke: "#45b29d" },
                        parent: { border: "3px solid #ccc"}
                    }}
                    data={api}
                />
                <VictoryScatter
                    style={{ data: { fill: "#45b29d" } }}
                    size={4}
                    data={api}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}
                />
            </VictoryChart>
        )
	}
}

export default LineGraphTestDuration
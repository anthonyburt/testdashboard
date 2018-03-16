import React from 'react'
import { VictoryChart, VictoryLine, VictoryLegend, VictoryAxis, VictoryScatter } from 'victory'
import _ from 'underscore'

class LineGraphTestDuration extends React.Component {

	render () {

        const graph_array = this.props.linegraph_duration.map((item,i) => ({
            selenium: item.data[0].v,
            api: item.data[1].v
        }));

        //this is only getting the first set of items in arr?


        const graph =
        [
            { "api":
                [
                    { x: "2/02/18",  y: 0 },
                    { x: "2/10/18", y: 20 },
                    { x: "2/17/18", y: 30 },
                    { x: "2/24/18", y: 70 },
                    { x: "3/3/18",  y: 80 },
                    { x: "3/10/18", y: 90 },
                    { x: "3/17/18", y: 100 },
                    { x: "3/24/18",  y: 150 }
                ],
                 "selenium": [
                    { x: "2/02/18",  y: 0 },
                    { x: "2/10/18", y: 5 },
                    { x: "2/17/18", y: 10 },
                    { x: "2/24/18", y: 15 },
                    { x: "3/3/18",  y: 20 },
                    { x: "3/10/18", y: 40 },
                    { x: "3/17/18", y: 60 },
                    { x: "3/24/18",  y: 80 }
                ]
            }
        ]

        return (

            <div>

                {console.log(graph_array[0].api)}

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
                        data={graph_array.api}
                    />
                    <VictoryScatter
                        style={{ data: { fill: "#334d5c" } }}
                        size={4}
                        data={graph_array.api}
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
                        data={graph[0].selenium}
                    />
                    <VictoryScatter
                        style={{ data: { fill: "#45b29d" } }}
                        size={4}
                        data={graph[0].selenium}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                    />
                </VictoryChart>
                </div>
            )
        }
}

export default LineGraphTestDuration
import React from 'react'
import { VictoryChart, VictoryLine, VictoryLegend, VictoryAxis, VictoryScatter } from 'victory'
import { Loader, Dimmer } from 'semantic-ui-react'

class LineGraphTestDuration extends React.Component {
     constructor(props) {
        super(props)
    }


	render () {

	    if(this.props.linegraph_duration == undefined) {
	        return (
                <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            )
        }

        var graph_array = this.props.linegraph_duration.map((item) => ({
           selenium: item.data[0].v,
           api: item.data[1].v
        }));


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

                {/*
                    This errors out and i'm not sure why, getting undefined on selenium
                    console.log(graph_array[0].selenium)
                */}
                console.log(graph_array[0])

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
                            data={graph.api}
                        />
                        <VictoryScatter
                            style={{ data: { fill: "#334d5c" } }}
                            size={4}
                            data={graph.api}
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
                            data={graph.selenium}
                        />
                        <VictoryScatter
                            style={{ data: { fill: "#45b29d" } }}
                            size={4}
                            data={graph.selenium}
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
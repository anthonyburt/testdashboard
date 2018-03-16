import React from 'react'
import { VictoryChart, VictoryLine, VictoryLegend, VictoryAxis, VictoryScatter } from 'victory'
import { Loader, Dimmer } from 'semantic-ui-react'

import statsService from '../api/Stats.js'

class LineGraphTestDuration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          linegraph_duration: []
        }

    }

    stupidSort(a,b) {
        console.log("in here")
        console.log(a)
        console.log(b)
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    }

    componentDidMount() {
        statsService.getQuickLookLineGraphTestDuration().then(json => this.setState({ linegraph_duration: json }))
    }

	render () {

	    if(this.props.linegraph_duration === undefined) {
	        return (
                <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            )
        }

        var api = this.state.linegraph_duration.map((item) =>  item.data[0].v)
        var selenium = this.state.linegraph_duration.map((item) =>  item.data[1].v)

        api.sort(function (a, b) {
            console.log("what")
            console.log(a.y)
            console.log(b.y)
            return a.y - b.y;
         });

        {console.log(api)}
           {console.log(items)}

        return (



            <div>
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
                            data={selenium[0]}
                        />
                        <VictoryScatter
                            style={{ data: { fill: "#334d5c" } }}
                            size={4}
                            data={selenium[0]}
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
                            data={api[0]}
                        />
                        <VictoryScatter
                            style={{ data: { fill: "#45b29d" } }}
                            size={4}
                            data={api[0]}
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
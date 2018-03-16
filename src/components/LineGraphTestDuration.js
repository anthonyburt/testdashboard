import React from 'react'
import { VictoryChart, VictoryLine, VictoryLegend, VictoryAxis, VictoryScatter } from 'victory'
import { Loader, Dimmer } from 'semantic-ui-react'

import statsService from '../api/Stats.js'

class LineGraphTestDuration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          linegraph_duration: [],
          api: [],
          selenium: []
        }
    }

    componentDidMount() {
        statsService.getQuickLookLineGraphTestDuration().then(json => this.setState({ linegraph_duration: json }))
    }

    sortDate(a, b) {
        if (a.x < b.x) {
            return -1;
        }
        if (a.x > b.x) {
            return 1;
        }

        // names must be equal
        return 0;
    }

	render () {

	    if(this.state.linegraph_duration === undefined || this.state.api === undefined || this.state.selenium === undefined) {
	        return (
                <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            )
        }

        this.state.api = this.state.linegraph_duration.map((item) =>  item.data[0].v)
        this.state.selenium = this.state.linegraph_duration.map((item) =>  item.data[1].v)

        if(this.state.api[0]) this.state.api[0].sort(this.sortDate)
        if(this.state.selenium[0]) this.state.selenium[0].sort(this.sortDate)

        if(this.state.api[0]) console.log(this.state.api[0])
        if(this.state.selenium[0]) console.log(this.state.selenium[0])

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
                            data={this.state.selenium[0]}
                        />
                        <VictoryScatter
                            style={{ data: { fill: "#334d5c" } }}
                            size={4}
                            data={this.state.selenium[0]}
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
                            data={this.state.api[0]}
                        />
                        <VictoryScatter
                            style={{ data: { fill: "#45b29d" } }}
                            size={4}
                            data={this.state.api[0]}
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
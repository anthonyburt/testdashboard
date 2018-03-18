import React from 'react'
import axios from 'axios'
import { VictoryChart, VictoryLine, VictoryLegend, VictoryAxis, VictoryScatter, VictoryLabel } from 'victory'
import { Loader, Dimmer } from 'semantic-ui-react'

import statsService from '../api/Stats.js'

class LineGraphTestDuration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          linegraph_status: [],
          success: [],
          failures: []
        }
    }

    componentDidMount() {
        axios.get(`api/stats/linegraphstatus`)
           .then(res => {
             const linegraph_status = res.data;
             this.setState({ linegraph_status });
             this.setState({ success: this.state.linegraph_status.map((item) =>  item.data[0].v) })
             this.setState({ failures: this.state.linegraph_status.map((item) =>  item.data[1].v) })
           })
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

	    if( this.state.success[0] === undefined) {
            return (
                <Dimmer inverted active>
                    <Loader size='tiny'>Loading</Loader>
                </Dimmer>
            )
        }



        if(this.state.success[0]) this.state.success[0].sort(this.sortDate)
        if(this.state.failures[0]) this.state.failures[0].sort(this.sortDate)

        return (

            <div>
                <VictoryChart
                    animate={{
                        duration: 500,
                        onLoad: { duration: 1000 }
                    }}
                >
                    <VictoryLabel text="Test Status" x={225} y={12} textAnchor="middle" />
                    <VictoryAxis axisLabelComponent
                        style={{
                                tickLabels: { angle: -40, fontSize: 10, padding: 15}
                            }}
                            offsetX={-100}
                        />
                        <VictoryAxis dependentAxis
                            label="Status"
                            style={{
                                axisLabel: {fontSize: 10, padding: 40}
                            }}
                         />


                        <VictoryLine
                            interpolation='natural'
                            style={{
                                data: { stroke: "#21ba45" },
                                parent: { border: "3px solid #ccc"},
                            }}
                            data={this.state.success[0]}
                        />
                        <VictoryScatter
                            style={{ data: { fill: "#21ba45" } }}
                            size={4}
                            data={this.state.success[0]}
                            animate={{
                                duration: 2000,
                                onLoad: { duration: 1000 }
                            }}
                        />

                        <VictoryLine
                            interpolation='natural'
                            style={{
                                data: { stroke: "#db2828" },
                                parent: { border: "3px solid #ccc"}
                            }}
                            data={this.state.failures[0]}
                        />
                        <VictoryScatter
                            style={{ data: { fill: "#db2828" } }}
                            size={4}
                            data={this.state.failures[0]}
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
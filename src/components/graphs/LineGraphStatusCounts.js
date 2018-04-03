import React from 'react'
import axios from 'axios'
import {  Grid, Dimmer, Loader } from 'semantic-ui-react'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryScatter } from 'victory'

class LineGraphTestDuration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fetching_data: true,
            success: [],
            failures: [],
            skipped: [],
            inconclusive: []
        }
    }

    componentDidMount() {
        axios.get(`api/stats/linegraphstatus`, {
                params: {
                    tribe: this.props.tribe,
                    harness: this.props.harness,
                    testcase: this.props.testRecord
                }
            })
           .then(res => {
                const linegraph_status = res.data;
                linegraph_status[0].data.map((item, index, arr) => {
                    if(item._id === 'Failed') {

                        this.setState({ failures: item.v })
                    } else if(item._id === 'Inconclusive') {
                        this.setState({ inconclusive: item.v })
                    } else if(item._id === 'Passed') {
                          this.setState({ success: item.v })
                    } else if (item._id === 'Skipped') {
                        this.setState({ skipped: item.v })
                    }
                })
            }
        )

        this.setState({ fetching_data: false})
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

        if(this.state.success) this.state.success.sort(this.sortDate)
        if(this.state.failures) this.state.failures.sort(this.sortDate)
        if(this.state.skipped) this.state.skipped.sort(this.sortDate)
        if(this.state.inconclusive) this.state.inconclusive.sort(this.sortDate)

        if( this.state.fetching_data === true ) {
            return (
                <Grid.Column key={this.props.harness} width={16} >
                   <Dimmer inverted active>
                       <Loader size='tiny'></Loader>
                   </Dimmer>
                </Grid.Column>
                )
        }

        return (

            <div>
                <VictoryChart
                    animate={{
                        duration: 1000,
                        onLoad: { duration: 1200 }
                    }}
                >
                    <VictoryAxis
                        style={{
                                tickLabels: { angle: -40, fontSize: 10, padding: 15}
                            }}
                            offsetX={-100}
                        />
                        <VictoryAxis dependentAxis
                            style={{
                                axisLabel: {fontSize: 10, padding: 40}
                            }}
                            tickFormat={(x) => (`${x}`)}
                         />

                        <VictoryLine
                            interpolation='natural'
                            style={{
                                data: { stroke: "#21ba45" },
                                parent: { border: "3px solid #ccc"},
                            }}
                            data={this.state.success}
                        />
                        <VictoryScatter
                            style={{ data: { fill: "#21ba45" } }}
                            size={4}
                            data={this.state.success}
                        />
                        <VictoryLine
                            interpolation='natural'
                            style={{
                                data: { stroke: "#db2828" },
                                parent: { border: "3px solid #ccc"}
                            }}
                            data={this.state.failures}
                        />
                        <VictoryScatter
                            style={{ data: { fill: "#db2828" } }}
                            size={4}
                            data={this.state.failures}
                            a
                        />
                        <VictoryLine
                            interpolation='natural'
                            style={{
                                data: { stroke: "#FBBD08" },
                                parent: { border: "3px solid #ccc"}
                            }}
                            data={this.state.skipped}
                        />
                        <VictoryScatter
                            style={{ data: { fill: "#FBBD08" } }}
                            size={4}
                            data={this.state.skipped}

                        />
                         <VictoryLine
                            interpolation='natural'
                            style={{
                                data: { stroke: "#767676" },
                                parent: { border: "3px solid #ccc"}
                            }}
                            data={this.state.inconclusive}
                        />
                        <VictoryScatter
                            style={{ data: { fill: "#767676" } }}
                            size={4}
                            data={this.state.inconclusive}
                        />
                    </VictoryChart>
                </div>
            )
        }
}

export default LineGraphTestDuration
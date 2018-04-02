import React from 'react'
import { VictoryPie, VictoryTooltip } from 'victory'
import axios from 'axios'
import { Dimmer, Loader, Card, Table, Segment } from 'semantic-ui-react'
import moment from 'moment'
import momentDuration from 'moment-duration-format'

class CategoryCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          pie_results: [],
          pie_colors: [],
          fetching_data: true,
          last_completion_time: '',
          last_success_rate: '',
          previous_success_rate: '',
          lastsync_category: '',
          lastsync_time: []

        }
    }

    componentDidMount() {
        axios.get(`api/stats/pie`, {
            params: {
                tribe: this.props.tribe,
                harness: this.props.harness,
                category: this.props.category
            }
        })
       .then(res => {
            const testResults = []
            const colorResults = []
            var pass_count = ''
            var total_count = ''
            const pie_results = res.data;
            pie_results.map((item, index, arr) => {
                if(item._id.result === 'Failed') {
                    testResults.push({x:item._id.result, y:item.test_count})
                    colorResults.push('#db2828')
                    total_count = item.test_count
                } else if(item._id.result === 'Inconclusive') {
                    testResults.push({x:item._id.result, y:item.test_count})
                    colorResults.push('#767676')
                    total_count = total_count + item.test_count
                } else if(item._id.result === 'Passed') {
                    testResults.push({x:item._id.result, y:item.test_count})
                    colorResults.push('#21ba45')
                    pass_count = item.test_count
                    total_count = total_count + pass_count
                } else if (item._id.result=== 'Skipped') {
                    testResults.push({x:item._id.result, y:item.test_count})
                    colorResults.push('#FBBD08')
                    total_count = total_count + item.test_count
                }
            })

            axios.get(`api/test/lastsync`, {
                params: {
                    tribe: this.props.tribe,
                    harness: this.props.harness,
                    category: this.props.category
                }
            })
            .then(res => {
                const syncTime = res.data
                this.setState({ lastsync_time: syncTime })
            })

            if ( total_count > 0 ) {
                this.setState({ last_success_rate: (Number.parseFloat(pass_count / total_count * 100).toFixed(0)) })
            }

            this.setState({
                pie_results: testResults,
                pie_colors: colorResults,
                fetching_data: false
            })
        })
    }

	render () {

        if( this.state.fetching_data === true ) {
           return (
                <Card>
                    <Card.Content>
                        <Card.Header>
                            Loading...
                        </Card.Header>
                        <Card.Description>
                        {this.props.category}
                        </Card.Description>
                    </Card.Content>
                </Card>
            )
        }

        return (
            <Card>
                <Card.Content>
                    <center>
                        <VictoryPie
                            width={300}
                            height={250}
                            labelComponent={<VictoryTooltip/>}
                            padAngle={3}
                            innerRadius={100}
                            style={{
                                data: {
                                    fillOpacity: 0.9, stroke: "#000000", strokeWidth: 2
                                },
                                parent: { maxWidth: "50%" }
                            }}
                            colorScale={this.state.pie_colors}
                            data={this.state.pie_results}
                            animate={{
                                duration: 1000,
                                onLoad: { duration: 500 }
                            }}
                        />
                    </center>
                    <Card.Header>
                        {this.props.category}
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                          {this.state.lastsync_time.map((item,i) => this.formatSync(item.date) )}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        <Table>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Last Success Rate:</Table.Cell>
                                <Table.Cell>{this.displayRate(this.state.last_success_rate)}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Prev Success Rate:</Table.Cell>
                                <Table.Cell>{this.displayRate(this.state.previous_success_rate)}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        </Table>
                    </Card.Description>
                </Card.Content>
            </Card>
        )
	}

	displayRate(rate) {
        return (rate !== '' ? rate.concat('%') : '')
    }

    formatSyncTime(time) {
        console.log(time)
        return (time !== '' ? this.formatSync(time) : '')
    }

    formatSync(time) {
        var start = moment(time);
        var end = moment();
        const converted = end.to(start);

        return (
          <div key="sync">Completed {converted}</div>
        )
    }



}






export default CategoryCard









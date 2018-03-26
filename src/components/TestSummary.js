import React, { Component } from 'react'
import {Table, Dimmer, Loader} from 'semantic-ui-react'
import axios from 'axios'
import moment from 'moment'
import momentDuration from 'moment-duration-format'

class TestSummary extends Component {
    constructor(props) {
    super(props)

        this.state = {
            test_data: [],
        }
    }

    componentDidMount() {
        if(this.props.includeHistory === 'true') {
            axios.get(`api/test`, {
                params: {
                    squad: this.props.testRecord.squad,
                    harness: this.props.harness,
                    status: 'All',
                    testcase: this.props.testRecord.testcase

                }
            })
            .then(res => {
                const test_data = res.data
                this.setState({ test_data })
            })
        }
    }

    render() {

        if (this.props.includeHistory === 'false')  {
            return (
                <Table celled color={this.getStatusColor(this.props.testRecord.result)}>
                    {this.tableHeader()}
                    {this.tableBody(this.props.testRecord)}
                </Table>
            )
        }

        if (this.state.test_data === undefined) {
            return (
                <Dimmer inverted active>
                    <Loader size='tiny'>Loading</Loader>
                </Dimmer>
            )
        }

        if (this.props.includeHistory === 'true')  {
                    return (

                        this.state.test_data.map((item, index, arr) => (
                            <Table celled color={this.getStatusColor(item.result)}>
                                {this.tableHeader()}
                                {this.tableBody(item)}
                            </Table>
                        ))
                    )
                }

        return (
            <div>
                missing history flag
            </div>
        )
    }

    tableHeader() {
        return (
           <Table.Header>
               <Table.Row>
                   <Table.HeaderCell>Harness</Table.HeaderCell>
                   <Table.HeaderCell>Date</Table.HeaderCell>
                   <Table.HeaderCell>Testcase</Table.HeaderCell>
                   <Table.HeaderCell>Result</Table.HeaderCell>
                   <Table.HeaderCell>Duration</Table.HeaderCell>
                   <Table.HeaderCell>Author</Table.HeaderCell>
               </Table.Row>
           </Table.Header>
       )
    }

    tableBody(record) {
        return (
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{record.harness}</Table.Cell>
                    <Table.Cell>{record.dateofexecution}</Table.Cell>
                    <Table.Cell>{record.testcase}</Table.Cell>
                    <Table.Cell>{record.result}</Table.Cell>
                    <Table.Cell>{this.formatDuration(record.duration)}</Table.Cell>
                    <Table.Cell>{record.author}</Table.Cell>
                </Table.Row>
            </Table.Body>
        )
    }

    getStatusColor(result) {
        var color = "teal"
        if (result === 'Passed') {
          color = "green"
        } else if (result === 'Failed') {
          color = "red"
        } else if (result === 'Skipped') {
          color = "yellow"
        } else if (result === 'Inconclusive') {
            color = 'grey'
        }
        return color
    }

    formatDuration(inTime) {
        const converted = moment.duration(inTime,"seconds").format("hh:mm:ss", {trim:false})

        return (
            converted
        )
    }

}

export default TestSummary
import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'

class TestSummary extends Component {

    render() {

        return (
            <Table celled color={this.getStatusColor(this.props.testRecord.result)}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Harness</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Testcase</Table.HeaderCell>
                        <Table.HeaderCell>Result</Table.HeaderCell>
                        <Table.HeaderCell>Message</Table.HeaderCell>
                        <Table.HeaderCell>Duration</Table.HeaderCell>
                        <Table.HeaderCell>Author</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{this.props.testRecord.harness}</Table.Cell>
                        <Table.Cell>{this.props.testRecord.dateofexecution}</Table.Cell>
                        <Table.Cell>{this.props.testRecord.testcase}</Table.Cell>
                        <Table.Cell>{this.props.testRecord.result}</Table.Cell>
                        <Table.Cell>{this.props.testRecord.message}</Table.Cell>
                        <Table.Cell>{this.props.testRecord.duration}</Table.Cell>
                        <Table.Cell>{this.props.testRecord.author}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    }

    getStatusColor(result) {
        var color = "pink"
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
}

export default TestSummary
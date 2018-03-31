import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'

class TestSteps extends Component {

    render() {

        return (
            <Table fixed size='small' celled basic='very' striped compact='very'>
                <Table.Body>
                    {this.generateStepRows(this.props.testSteps)}
                </Table.Body>
            </Table>
        )
    }

    generateStepRows(steps) {
        return (
            steps.map((item, index, arr) => (
                <Table.Row key={index}>
                    <Table.Cell>{item}</Table.Cell>
                </Table.Row>
            ))
        )
    }
}

export default TestSteps

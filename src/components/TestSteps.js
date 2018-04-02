import React, { Component } from 'react'
import {Table, Icon} from 'semantic-ui-react'

class TestSteps extends Component {

    render() {

        return (
            <Table striped basic='very' celled>
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
                    <Table.Cell textAlign='center'><Icon name='thumbs up' color='green'/></Table.Cell>
                    <Table.Cell>{item}</Table.Cell>
                </Table.Row>
            ))
        )
    }
}

export default TestSteps
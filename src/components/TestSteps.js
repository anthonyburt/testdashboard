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

    // This isn't working -- will need to fix once test steps are reporting failures in mongo
    generateStepRowsWithFailure(steps) {
        const { value } = this.state.value

        return (
            <div>
            {
                steps.map((item, index, arr) => {
                    if (arr.length - 1 === index) {
                        {console.log("in here")}
                        <Table.Row>
                            <Table.Cell>{item}</Table.Cell>
                        </Table.Row>
                    } else {
                           {console.log("not in here")}
                        <Table.Row>
                            <Table.Cell color='red'>{item}</Table.Cell>
                        </Table.Row>
                    }
                })
            }
            </div>
        )
    }
}

export default TestSteps

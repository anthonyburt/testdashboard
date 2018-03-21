import React from 'react'
import axios from 'axios'
import { Table, Loader, Dimmer } from 'semantic-ui-react'

class TestResultsTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          test_data: []
        }
    }

    componentDidMount() {
        axios.get(`api/test/`)
          .then(res => {
            const test_data = res.data;
            this.setState({ test_data });
          })
    }

    render() {

        if( this.state.test_data[0] === undefined) {
            return (
                <Dimmer inverted active>
                    <Loader size='tiny'>Loading</Loader>
                </Dimmer>
            )
        }

        return (
            <div>
                <Table celled color='green'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Harness</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Testcase</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Message</Table.HeaderCell>
                            <Table.HeaderCell>Duration</Table.HeaderCell>
                            <Table.HeaderCell>Author</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>A useful description</Table.Cell>
                            <Table.Cell>Success</Table.Cell>
                            <Table.Cell>00:54:22</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }

}

export default TestResultsTable
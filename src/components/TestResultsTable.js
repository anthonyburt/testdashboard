import React, { Component } from 'react'
import { Accordion, Icon, Label, Table, Comment, Form, Header, Button } from 'semantic-ui-react'

class TestResultsTable extends Component {

    render() {

        return (
            <div>
              <Table celled color='green'>
                  <Table.Header>
                      <Table.Row>
                          <Table.HeaderCell>Description</Table.HeaderCell>
                          <Table.HeaderCell>Message</Table.HeaderCell>
                          <Table.HeaderCell>Duration</Table.HeaderCell>
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
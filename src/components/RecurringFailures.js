import React from 'react'
import { VictoryPie, VictoryTooltip } from 'victory'
import axios from 'axios'
import { Table, Grid, Card, List, Icon, Segment, Header, Pagination } from 'semantic-ui-react'
import moment from 'moment'
import momentDuration from 'moment-duration-format'

class RecurringFailures extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

	render () {
        return (
        <div>
          <Header as='h3' dividing>
              Recurring Failures
            </Header>
              <Table celled compact collapsing striped>
                <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Test</Table.HeaderCell>
                      <Table.HeaderCell>Failure Rate</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell><Icon name='settings'></Icon> Basic Product Info</Table.Cell>
                    <Table.Cell textAlign='center'>20%</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell><Icon name='settings'></Icon> Basic Product Info</Table.Cell>
                    <Table.Cell textAlign='center'>20%</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell><Icon name='settings'></Icon> Basic Product Info</Table.Cell>
                    <Table.Cell textAlign='center'>20%</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><Icon name='settings'></Icon> Basic Product Info</Table.Cell>
                        <Table.Cell textAlign='center'>20%</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><Icon name='settings'></Icon> Basic Product Info</Table.Cell>
                      <Table.Cell textAlign='center'>20%</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><Icon name='settings'></Icon> Basic Product Info</Table.Cell>
                        <Table.Cell textAlign='center'>20%</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><Icon name='settings'></Icon> Basic Product Info</Table.Cell>
                        <Table.Cell textAlign='center'>20%</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><Icon name='settings'></Icon> Basic Product Info</Table.Cell>
                        <Table.Cell textAlign='center'>20%</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><Icon name='settings'></Icon> Basic Product Info</Table.Cell>
                        <Table.Cell textAlign='center'>20%</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><Icon name='settings'></Icon> Basic Product Info</Table.Cell>
                        <Table.Cell textAlign='center'>20%</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                <Table.Footer fullWidth>
                  <Table.Row>
                    <Table.HeaderCell colSpan='3' textAlign='center'>
                      <Pagination defaultActivePage={1} firstItem={null} lastItem={null} pointing secondary totalPages={3} />
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
            </Table>
        </div>
        )
    }
}

export default RecurringFailures









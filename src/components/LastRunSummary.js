import React, { Component } from 'react'
import { Table, Icon } from 'semantic-ui-react'

class Header extends Component {

    render() {

        return (
            <Table selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell>Last Run</Table.HeaderCell>
                        <Table.HeaderCell>Duration</Table.HeaderCell>
                        <Table.HeaderCell>Failture Rate</Table.HeaderCell>
                     </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Icon name='apple' />
                        </Table.Cell>
                        <Table.Cell>8 hours ago</Table.Cell>
                        <Table.Cell>00:54:22</Table.Cell>
                        <Table.Cell>0%</Table.Cell>
                    </Table.Row>

                    <Table.Row warning>
                        <Table.Cell>
                            <Icon name='firefox' />
                        </Table.Cell>
                        <Table.Cell >8 hours ago</Table.Cell>
                        <Table.Cell>00:54:22</Table.Cell>
                        <Table.Cell>
                            <Icon name='attention' />6%
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row warning>
                        <Table.Cell>
                            <Icon name='chrome' />
                        </Table.Cell>
                        <Table.Cell>8 hours ago</Table.Cell>
                        <Table.Cell>00:54:22</Table.Cell>
                        <Table.Cell >
                            <Icon name='attention' />12%
                        </Table.Cell>
                        </Table.Row>

                    <Table.Row>
                        <Table.Cell>
                            <Icon name='internet explorer' />
                        </Table.Cell>
                        <Table.Cell>8 hours ago</Table.Cell>
                        <Table.Cell>00:54:22</Table.Cell>
                        <Table.Cell>0</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    }
}

export default Header


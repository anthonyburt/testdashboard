import React from 'react'
import { Table, Icon } from 'semantic-ui-react'



class ProductStats extends React.Component {

    render () {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Last Ran</Table.HeaderCell>
                        <Table.HeaderCell>Duration</Table.HeaderCell>
                        <Table.HeaderCell>Pass</Table.HeaderCell>
                        <Table.HeaderCell>Fail</Table.HeaderCell>
                        <Table.HeaderCell>Skipped</Table.HeaderCell>
                        <Table.HeaderCell>Ignored</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell positive> <div class="ui ribbon label">Feb. 21, 2018 @ 10:10 am</div></Table.Cell>
                        <Table.Cell>00:35:23</Table.Cell>
                        <Table.Cell>100</Table.Cell>
                        <Table.Cell>0</Table.Cell>
                        <Table.Cell>0</Table.Cell>
                        <Table.Cell>0</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell negative> <div class="ui ribbon label">Jan. 21, 2018 @ 10:10 am</div></Table.Cell>
                        <Table.Cell>01:28:15</Table.Cell>
                        <Table.Cell>66</Table.Cell>
                        <Table.Cell error>
                            <Icon name='attention' />
                            22
                        </Table.Cell>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>1</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell negative> <div class="ui ribbon label">Dec. 21, 2017 @ 10:10 am</div></Table.Cell>
                        <Table.Cell>01:14:23</Table.Cell>
                        <Table.Cell>44</Table.Cell>
                        <Table.Cell error>
                            <Icon name='attention' />
                            33
                        </Table.Cell>
                        <Table.Cell>0</Table.Cell>
                        <Table.Cell>0</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    }
}


export default ProductStats
import React, { Component } from 'react'
import {  Grid, Icon, Table, Segment, Dropdown } from 'semantic-ui-react'
import Helmet from 'react-helmet'
import PieGraphBrowsers from './PieGraphBrowsers'
import ResultsFeed from './ResultsFeed'

const optionsTestRuns = [
    { key: 1, text: '#6 03/07/18 02:02:00', value: 1 },
    { key: 2, text: '#5 03/07/18 01:02:00', value: 2 },
    { key: 3, text: '#4 03/06/18 11:02:00', value: 3 },
    { key: 4, text: '#3 03/05/18 10:02:00', value: 4 },
    { key: 5, text: '#2 03/04/18 15:02:00', value: 5 },
    { key: 6, text: '#1 03/03/18 15:02:00', value: 6 },
]

const optionsTestHarness = [
  { key: 1, text: 'UI', value: 1 },
  { key: 2, text: 'API', value: 2 }
]

const optionsBrowser = [
  { key: 1, text: 'Safari', value: 1 },
  { key: 2, text: 'Firefox', value: 2 },
  { key: 3, text: 'Chrome', value: 3 },
  { key: 4, text: 'Edge', value: 4 }
]

const optionsTestStatus = [
  { key: 1, text: 'All', value: 1 },
  { key: 2, text: 'Success', value: 2 },
  { key: 3, text: 'Failure', value: 3 },
  { key: 4, text: 'Skipped', value: 4 }
]

export default class ShopX extends Component {
    constructor(props) {
        super(props);

        this.state = {
          value: 1
        }

    }

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state

        return (

            <div className='home-stats'>
            <Segment.Group>
            <Segment>
            <Helmet bodyAttributes={{style: 'background-color : #fcfcfc'}}/>
            <Grid centered >
                <Grid.Row >
                    <Grid.Column width={8} floated='left'>
                        <Segment.Group >
                            <Segment color='blue' inverted>Selenium</Segment>
                                <Segment>
                                    <Segment>
                                    <Grid>
                                        <Grid.Row >
                                            <Grid.Column width={6} >
                                                <PieGraphBrowsers />
                                            </Grid.Column>
                                            <Grid.Column width={10} >
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
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    </Segment>
                                </Segment>
                            </Segment.Group>
                        </Grid.Column>
                    <Grid.Column width={8} floated='left'>
                    <Segment.Group >
                        <Segment color='blue' inverted>API</Segment>
                            <Segment>
                            <Segment>
                                <Grid>
                                    <Grid.Row >
                                        <Grid.Column width={6} >
                                            <PieGraphBrowsers />
                                        </Grid.Column>
                                        <Grid.Column width={10} >
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
                                                            Products
                                                        </Table.Cell>
                                                        <Table.Cell>8 hours ago</Table.Cell>
                                                        <Table.Cell>00:54:22</Table.Cell>
                                                        <Table.Cell>0%</Table.Cell>
                                                    </Table.Row>

                                                    <Table.Row>
                                                        <Table.Cell>
                                                            Pricing
                                                        </Table.Cell>
                                                        <Table.Cell>8 hours ago</Table.Cell>
                                                        <Table.Cell>00:54:22</Table.Cell>
                                                        <Table.Cell>0%</Table.Cell>
                                                    </Table.Row>

                                                    <Table.Row>
                                                        <Table.Cell>
                                                            Stores
                                                        </Table.Cell>
                                                        <Table.Cell>8 hours ago</Table.Cell>
                                                        <Table.Cell>00:54:22</Table.Cell>
                                                        <Table.Cell >0%</Table.Cell>
                                                        </Table.Row>

                                                    <Table.Row>
                                                        <Table.Cell>
                                                            Checkout
                                                        </Table.Cell>
                                                        <Table.Cell>8 hours ago</Table.Cell>
                                                        <Table.Cell>00:54:22</Table.Cell>
                                                        <Table.Cell>100%</Table.Cell>
                                                    </Table.Row>

                                                </Table.Body>
                                            </Table>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                            </Segment>
                        </Segment.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16} >
                        <Segment.Group >
                            <Segment color='blue' inverted> Test Details</Segment>
                                <Segment>
                                    <Segment>
                                    <Grid columns={2} verticalAlign='top'>

                                        <Grid.Column width={3}>
                                            <div>Harness</div>
                                                <Dropdown
                                                    key='dropDownTestHarness'
                                                    onChange={this.handleChange}
                                                    options={optionsTestHarness}
                                                    placeholder='Choose an option'
                                                    selection
                                                    value={value}
                                                    floating
                                                />
                                            <div>Test Run</div>
                                                <Dropdown
                                                    key='dropDownTestRuns'
                                                    onChange={this.handleChange}
                                                    options={optionsTestRuns}
                                                    placeholder='Choose an option'
                                                    selection
                                                    value={value}
                                                    floating
                                                />
                                            <div>Browser</div>
                                                <Dropdown
                                                    key='dropDownBrowser'
                                                    onChange={this.handleChange}
                                                    options={optionsBrowser}
                                                    placeholder='Choose an option'
                                                    selection
                                                    value={value}
                                                    floating
                                                />
                                            <div>Status</div>
                                                <Dropdown
                                                    key='dropDownTestStatus'
                                                    onChange={this.handleChange}
                                                    options={optionsTestStatus}
                                                    placeholder='Choose an option'
                                                    selection
                                                    value={value}
                                                    floating
                                                />
                                        </Grid.Column>
                                        <Grid.Column width={13}>
                                            <ResultsFeed />
                                      </Grid.Column>
                                    </Grid>
                                </Segment>
                            </Segment>
                        </Segment.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Segment>
            </Segment.Group>
            </div>
        )
    }
}

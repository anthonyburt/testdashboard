import React, { Component } from 'react'
import {  Table, Grid, Segment, Card } from 'semantic-ui-react'
import Helmet from 'react-helmet'

import TestDetails from '../components//TestDetails'
import PiePassFail from '../components/graphs/PiePassFail'
import LineGraphStatusCounts from '../components/graphs/LineGraphStatusCounts'

export default class UI_dash extends Component {

    render() {

        return (
            <div>
            <Segment.Group>
                <Segment>
                <Helmet bodyAttributes={{style: 'background-color : #fcfcfc'}}/>
                <Grid columns={1}>
                    <Grid.Row centered columns={3}>
                        <Grid.Column >
                            <LineGraphStatusCounts />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid columns={1}>
                    <Grid.Row columns={7}>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                <center><PiePassFail squad = {this.props.squad} /></center>
                                <Card.Content>
                                    <Card.Header>
                                        Shop X
                                    </Card.Header>
                                    <Card.Meta>
                                        <span className='date'>
                                          Completed 5 hrs ago
                                        </span>
                                    </Card.Meta>
                                    <Card.Description>
                                        <Table>
                                        <Table.Body>
                                            <Table.Row>
                                                <Table.Cell>Last Success Rate:</Table.Cell>
                                                <Table.Cell>100%</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>Previous Success Rate:</Table.Cell>
                                                <Table.Cell>100%</Table.Cell>
                                            </Table.Row>
                                        </Table.Body>
                                        </Table>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                            </Grid.Column>
                            <Grid.Column>
                            <Card>
                                <center><PiePassFail squad = {this.props.squad} /></center>
                                <Card.Content>
                                    <Card.Header>
                                        Checkout
                                    </Card.Header>
                                    <Card.Meta>
                                        <span className='date'>
                                          Completed 5 hrs ago
                                        </span>
                                    </Card.Meta>
                                    <Card.Description>
                                        <Table>
                                        <Table.Body>
                                            <Table.Row>
                                                <Table.Cell>Last Success Rate:</Table.Cell>
                                                <Table.Cell>100%</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>Previous Success Rate:</Table.Cell>
                                                <Table.Cell>100%</Table.Cell>
                                            </Table.Row>
                                        </Table.Body>
                                        </Table>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                            </Grid.Column>
                            <Grid.Column>
                            <Card>
                                <center><PiePassFail squad = {this.props.squad} /></center>
                                <Card.Content>
                                    <Card.Header>
                                        Order Assist
                                    </Card.Header>
                                    <Card.Meta>
                                        <span className='date'>
                                          Completed 5 hrs ago
                                        </span>
                                    </Card.Meta>
                                    <Card.Description>
                                       <Table>
                                       <Table.Body>
                                           <Table.Row>
                                               <Table.Cell>Last Success Rate:</Table.Cell>
                                               <Table.Cell>100%</Table.Cell>
                                           </Table.Row>
                                           <Table.Row>
                                               <Table.Cell>Previous Success Rate:</Table.Cell>
                                               <Table.Cell>100%</Table.Cell>
                                           </Table.Row>
                                       </Table.Body>
                                       </Table>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                            </Grid.Column>
                            <Grid.Column>
                            <Card>
                                <center><PiePassFail squad = {this.props.squad} /></center>
                                <Card.Content>
                                    <Card.Header>
                                        Order Management
                                    </Card.Header>
                                    <Card.Meta>
                                        <span className='date'>
                                          Completed 5 hrs ago
                                        </span>
                                    </Card.Meta>
                                    <Card.Description>
                                       <Table>
                                       <Table.Body>
                                           <Table.Row>
                                               <Table.Cell>Last Success Rate:</Table.Cell>
                                               <Table.Cell>100%</Table.Cell>
                                           </Table.Row>
                                           <Table.Row>
                                               <Table.Cell>Previous Success Rate:</Table.Cell>
                                               <Table.Cell>100%</Table.Cell>
                                           </Table.Row>
                                       </Table.Body>
                                       </Table>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid>
                <Grid.Row>
                    <TestDetails tribe = {this.props.tribe}/>
                </Grid.Row>
            </Grid>
            </Segment>
            </Segment.Group>
            </div>
        )
    }
}

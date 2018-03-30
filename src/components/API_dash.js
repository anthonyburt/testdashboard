import React, { Component } from 'react'
import { Menu, Label, Tab, Table, Header, Icon, Card, Grid, Segment } from 'semantic-ui-react'
import Helmet from 'react-helmet'

import PiePassFail from '../components/graphs/PiePassFail'
import TestDetails from '../components//TestDetails'
import LineGraphStatusCounts from '../components/graphs/LineGraphStatusCounts'

export default class API_dash extends Component {
   constructor(props) {
        super(props)

        this.state = {
            harness: 'API'
        }
    }

    render() {

        return (
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
                        <Grid.Column>
                            <Card>
                                <center><PiePassFail squad = {this.props.squad} /></center>
                                <Card.Content>
                                    <Card.Header>
                                        Address
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
                                        Direct
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
                                        Email
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
                                        Pricing
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
                                        Product
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
                                        Store
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
                                        SalesForce
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
                    <TestDetails tribe = {this.props.tribe} harness={this.props.harness} />
                </Grid.Row>
            </Grid>
            </Segment>
            </Segment.Group>
        )
    }
}

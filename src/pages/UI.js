import React, { Component } from 'react'
import {  Header, Grid, Segment, Card, Icon, Image } from 'semantic-ui-react'
import Helmet from 'react-helmet'

import TestDetails from '../components//TestDetails'
import PiePassFail from '../components/graphs/PiePassFail'
import LastRunSummary from '../components/LastRunSummary'
import LineGraphStatusCounts from '../components/graphs/LineGraphStatusCounts'

export default class ShopX extends Component {

    render() {

        return (
            <div>
            <Segment.Group>
                <Segment>
                <Header as='h2'>
                    <Header.Content>
                      E-commerce
                    </Header.Content>
                  </Header>
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
                                          Last Run 5 hrs ago
                                        </span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Last Run Success Rate: 100%
                                        <div>Previous Run Success Rate: 100%</div>
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
                                          Last Run 5 hrs ago
                                        </span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Last Run Success Rate: 100%
                                        <div>Previous Run Success Rate: 100%</div>
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
                                          Last Run 5 hrs ago
                                        </span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Last Run Success Rate: 100%
                                        <div>Previous Run Success Rate: 100%</div>
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
                                          Last Run 5 hrs ago
                                        </span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Last Run Success Rate: 100%
                                        <div>Previous Run Success Rate: 100%</div>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid>
                <Grid.Row>
                    <TestDetails squad = {this.props.squad}/>
                </Grid.Row>
            </Grid>
            </Segment>
            </Segment.Group>
            </div>
        )
    }
}

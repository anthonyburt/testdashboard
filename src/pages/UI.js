import React, { Component } from 'react'
import {  Grid, Segment } from 'semantic-ui-react'
import Helmet from 'react-helmet'

import TestDetails from '../components//TestDetails'
import PiePassFail from '../components/graphs/PiePassFail'
import LastRunSummary from '../components/LastRunSummary'

export default class ShopX extends Component {

    render() {

        return (
            <div>
            <Segment.Group>
            <Segment>
            <Helmet bodyAttributes={{style: 'background-color : #fcfcfc'}}/>
            <Grid centered >
                <Grid.Row >
                    <Grid.Column width={16} floated='left' >
                        <Segment.Group >
                            <Segment color='blue' inverted>Selenium</Segment>
                                <Segment>
                                    <Segment>
                                    <Grid divided>

                                        <Grid.Row >
                                            <Grid.Column width={4} textAlign='center' >
                                                <PiePassFail squad = {this.props.squad} />
                                                Shop X
                                            </Grid.Column>
                                            <Grid.Column width={4} textAlign='center' >
                                                <PiePassFail squad = {this.props.squad} />
                                                Checkout
                                            </Grid.Column>
                                            <Grid.Column width={4} textAlign='center' >
                                                <PiePassFail squad = {this.props.squad} />
                                                Order Assist
                                            </Grid.Column>
                                            <Grid.Column width={4} textAlign='center' >
                                                <PiePassFail squad = {this.props.squad} />
                                                Order Management
                                            </Grid.Column>
                                        </Grid.Row>

                                        <Grid.Row>
                                            <Grid.Column width={16} >
                                                <LastRunSummary/>
                                            </Grid.Column>
                                        </Grid.Row>

                                    </Grid>
                                    </Segment>
                                </Segment>
                            </Segment.Group>
                        </Grid.Column>

                </Grid.Row>
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

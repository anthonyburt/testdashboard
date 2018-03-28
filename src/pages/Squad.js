import React, { Component } from 'react'
import {  Grid, Segment } from 'semantic-ui-react'
import Helmet from 'react-helmet'

import PiePassFail from '../components/graphs/PiePassFail'
import TestDetails from '../components//TestDetails'
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
                        <Grid.Column width={16} >
                            <Segment.Group >
                                <Segment color='blue' inverted>API Services</Segment>
                                    <Segment>
                                        <Segment>
                                        <Grid divided>

                                            <Grid.Row  >
                                                <Grid.Column width={4} textAlign='center' >
                                                    <PiePassFail squad = {this.props.squad} />
                                                    Pricing
                                                </Grid.Column>
                                                <Grid.Column width={4} textAlign='center' >
                                                    <PiePassFail squad = {this.props.squad} />
                                                    Products
                                                </Grid.Column>
                                                <Grid.Column width={4} textAlign='center' >
                                                    <PiePassFail squad = {this.props.squad} />
                                                    Store
                                                </Grid.Column>
                                                <Grid.Column width={4} textAlign='center' >
                                                    <PiePassFail squad = {this.props.squad} />
                                                    Order Management
                                                </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row  >
                                                <Grid.Column width={4} textAlign='center' >
                                                    <PiePassFail squad = {this.props.squad} />
                                                    Pricing
                                                </Grid.Column>
                                                <Grid.Column width={4} textAlign='center' >
                                                    <PiePassFail squad = {this.props.squad} />
                                                    Products
                                                </Grid.Column>
                                                <Grid.Column width={4} textAlign='center' >
                                                    <PiePassFail squad = {this.props.squad} />
                                                    Store
                                                </Grid.Column>
                                                <Grid.Column width={4} textAlign='center' >
                                                    <PiePassFail squad = {this.props.squad} />
                                                    Order Management
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

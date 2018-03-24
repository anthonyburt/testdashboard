import React, { Component } from 'react'
import {  Grid, Segment } from 'semantic-ui-react'
import Helmet from 'react-helmet'

import PieGraphBrowsers from '../components/graphs/PieGraphBrowsers'
import TestDetails from '../components//TestDetails'
import LastRunSummary from '../components/LastRunSummary'

export default class OrderAssist extends Component {

    render() {

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
                                                <PieGraphBrowsers squad = {this.props.squad} />
                                            </Grid.Column>
                                            <Grid.Column width={10} >
                                                <LastRunSummary squad = {this.props.squad} />
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
                                            <PieGraphBrowsers squad = {this.props.squad} />
                                        </Grid.Column>
                                        <Grid.Column width={10} >
                                            <LastRunSummary squad = {this.props.squad} />
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

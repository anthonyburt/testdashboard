import React from 'react'
import {  Grid, Icon, Label, Segment } from 'semantic-ui-react'
import Helmet from 'react-helmet'

import statsService from '../api/Stats.js'

import OverallHistory from './OverallHistory.js'
import LineGraphTestDuration from './LineGraphTestDuration'
import BarGraphPassFail from '../components/BarGraphPassFail'



class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          overall_stats: [],
          linegraph_duration: []
        }
    }

    componentDidMount() {
        statsService.getOverallHistory().then(json => this.setState({ overall_stats: json }))
        statsService.getQuickLookLineGraphTestDuration().then(json => this.setState({ linegraph_duration: json }))
    }

    render () {

        return (
            <div className='home-stats'>
                <Helmet bodyAttributes={{style: 'background-color : #fcfcfc'}}/>
                <Segment.Group>
                    <Segment>
                        <Segment.Group>
                            <Segment color='blue' inverted >Overall History
                                <Label attached='top right'>
                                    <Icon name='time' />Synced: 8 hours ago
                                  </Label></Segment>
                                <Segment>
                                    <OverallHistory overall_stats = {this.state.overall_stats} />
                                </Segment>
                        </Segment.Group >

                        <Segment.Group >
                        <Segment color="blue" inverted >Quick Look</Segment>
                            <Segment>
                                <div>
                                    <Grid centered >
                                        <Grid.Row >
                                            <Grid.Column width={8} floated='left'>
                                                <LineGraphTestDuration/>
                                            </Grid.Column>
                                            <Grid.Column width={8} floated='left'>
                                                 <BarGraphPassFail/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </div>
                            </Segment>
                        </Segment.Group>
                    </Segment>
                </Segment.Group>
            </div>
        )
    }
}


export default Home
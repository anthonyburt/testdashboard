import React from 'react'
import {  Grid, Statistic, Icon, Label, Segment } from 'semantic-ui-react'
import Helmet from 'react-helmet'

import api from '../api'

import LineGraphTestDuration from './LineGraphTestDuration'
import BarGraphPassFail from '../components/BarGraphPassFail'



class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          overall_stats: []
        }
    }

    componentDidMount() {
        api.get().then(json => this.setState({ overall_stats: json }))
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
                            <Statistic.Group widths='four'>
                                <Statistic color='violet'>
                                    <Statistic.Value>42,154</Statistic.Value>
                                    <Statistic.Label>Tests Processed</Statistic.Label>
                                </Statistic>
                                <Statistic color='orange'>
                                    <Statistic.Value>220:45:56</Statistic.Value>
                                    <Statistic.Label>Time Spent</Statistic.Label>
                                </Statistic>
                                <Statistic color='green'>
                                    <Statistic.Value>
                                        <Icon name='thumbs up' />
                                        94%
                                    </Statistic.Value>
                                    <Statistic.Label color='teal'>Success</Statistic.Label>
                                </Statistic>
                                <Statistic color='red'>
                                    <Statistic.Value>
                                        <Icon name='thumbs down' />
                                        6%
                                    </Statistic.Value>
                                    <Statistic.Label>Failures</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
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
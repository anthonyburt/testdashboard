import React from 'react'
import {  Grid, Icon, Label, Segment, Card } from 'semantic-ui-react'
import Helmet from 'react-helmet'
import moment from 'moment'
import axios from 'axios'

import statsService from '../api/Stats.js'

import OverallHistory from '../components/OverallHistory'
import DashPassFailRate from '../components/DashPassFailRate'
import RecentFailedTests from '../components/RecentFailedTests'
import RecurringFailures from '../components/RecurringFailures'
import TreemapWidget2 from '../components/TreemapWidget2'
import LineGraphStatusCount from '../components/graphs/LineGraphStatusCounts'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            overall_stats: [],
            lastSync: []
        }
    }

    componentDidMount() {
        statsService.getOverallHistory().then(json => this.setState({ overall_stats: json }))
        axios.get(`api/test/lastsync`, {
        })
          .then(res => {
            const syncTime = res.data
            this.setState({ lastSync: syncTime })
        })
    }

     formatSync(inTime) {
        var start = moment(inTime);
        var end = moment();
        const converted = end.to(start);

        return (
          <div key="sync">{converted}</div>
        )
    }

    render () {

        return (
            <div >
                <Helmet bodyAttributes={{style: 'background-color : #fcfcfc'}}/>
                <Segment.Group>
                    <Segment>
                        <Segment.Group>
                            <Segment color='blue' inverted raised>Overall History
                                <Label attached='top right' size='small' color='grey'>
                                    <Icon name='time' />
                                    Synced
                                    <Label.Detail>{this.state.lastSync.map((item,i) => this.formatSync(item.date) )} </Label.Detail>
                                  </Label>
                                  </Segment>
                                <Segment>
                                    <OverallHistory overall_stats = {this.state.overall_stats} />
                                </Segment>
                        </Segment.Group>
                        <Segment.Group>
                        <Segment color="blue" inverted >Quick Look</Segment>
                            <Grid padded>
                                <Grid.Row>
                                <Grid.Column width={2} >
                                  <DashPassFailRate tribe={this.props.tribe} harness={this.state.harness} category="Pricing" />
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <LineGraphStatusCount />
                                </Grid.Column>
                                <Grid.Column width= {5}>
                                    <TreemapWidget2 />
                                </Grid.Column>
                                <Grid.Column width ={3} floated='right'>
                                    <RecurringFailures />
                                </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment.Group>
                    </Segment>
                </Segment.Group>
            </div>
        )
    }
}


export default Home
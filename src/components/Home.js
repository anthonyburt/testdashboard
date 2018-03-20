import React from 'react'
import {  Grid, Icon, Label, Segment } from 'semantic-ui-react'
import Helmet from 'react-helmet'
import moment from 'moment'

import statsService from '../api/Stats.js'

import OverallHistory from './OverallHistory.js'
import LineGraphStatusCount from './LineGraphStatusCounts'
import BarGraphPassFail from '../components/BarGraphPassFail'



class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          overall_stats: [],
          linegraph_status: [],
          lastSync: []
        }
    }

    componentDidMount() {
        statsService.getOverallHistory().then(json => this.setState({ overall_stats: json }))
        statsService.getLastSyncTime().then(json => this.setState({ lastSync: json }))
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
            <div className='home-stats'>
                <Helmet bodyAttributes={{style: 'background-color : #fcfcfc'}}/>
                <Segment.Group>
                    <Segment>
                        <Segment.Group>
                            <Segment color='blue' inverted raised>Overall History
                                <Label attached='top right' size='small' color='grey'>
                                    <Icon color='lime' name='time' />
                                    Synced
                                    <Label.Detail>{this.state.lastSync.map((item,i) => this.formatSync(item.date) )} </Label.Detail>
                                  </Label>
                                  </Segment>
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
                                                <LineGraphStatusCount linegraph_status = {this.state.linegraph_duration} />
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
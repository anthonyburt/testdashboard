import React from 'react'
import {  Grid, Icon, Label, Segment, Card } from 'semantic-ui-react'
import Helmet from 'react-helmet'
import moment from 'moment'
import axios from 'axios'
import GridLayout from 'react-grid-layout'

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
        var layout = [
              {i: 'a', x: 0, y: 0, w: 1, h: 1, isResizable: false},
              {i: 'b', x: 1, y: 0, w: 2, h: 1, minW: 2, maxW: 3, minH: 2, maxH:2},
              {i: 'c', x: 6, y: 0, w: 2, h: 2, isResizable: false},
              {i: 'd', x: 8, y: 0, w: 2, h: 2, isResizable: false},
              {i: 'e', x: 0, y: 5, w: 4, h: 2, isResizable: false},
            ];

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
                            <GridLayout className="layout" layout={layout} cols={10} rowHeight={250} width={1800}>
                                            <div key="a"><DashPassFailRate tribe={this.props.tribe} harness={this.state.harness} category="Pricing" /></div>
                                            <div key="b"><LineGraphStatusCount /></div>
                                            <div key="c"><RecentFailedTests /></div>
                                            <div key="d"><RecurringFailures /></div>
                                            <div key="e"><TreemapWidget2 /></div>
                            </GridLayout>
                        </Segment.Group>
                    </Segment>
                </Segment.Group>
            </div>
        )
    }
}


export default Home
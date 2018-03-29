import React, { Component } from 'react'
import { Menu, Label, Tab, Table, Header, Icon, Card, Grid, Segment } from 'semantic-ui-react'
import Helmet from 'react-helmet'

import PiePassFail from '../components/graphs/PiePassFail'
import TestDetails from '../components//TestDetails'
import LineGraphStatusCounts from '../components/graphs/LineGraphStatusCounts'

export default class Performance_dash extends Component {

    render() {

        return (
            <Segment.Group>
                <Segment>
                <Helmet bodyAttributes={{style: 'background-color : #fcfcfc'}}/>
                <Header as='h2'>
                    <Header.Content>
                      work in progress
                    </Header.Content>
                  </Header>
                <Grid columns={1}>
                </Grid>
            </Segment>
            </Segment.Group>
        )
    }
}

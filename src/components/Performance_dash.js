import React, { Component } from 'react'
import { Header, Grid, Segment } from 'semantic-ui-react'
import Helmet from 'react-helmet'

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

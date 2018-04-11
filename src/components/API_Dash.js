import React, { Component } from 'react'
import { Grid, Segment, Dimmer, Loader } from 'semantic-ui-react'
import Helmet from 'react-helmet'

import TimerX from './Timer'
import CategoryCard from '../components/CategoryCard'
import TestDetails from '../components//TestDetails'
import LineGraphStatusCounts from '../components/graphs/LineGraphStatusCounts'

export default class API_dash extends Component {
   constructor(props) {
        super(props)

        this.state = {
            harness: 'API'
        }
    }

    render() {

         if( this.props.tribe === undefined) {
            return (
                <Dimmer inverted active>
                    <Loader size='tiny'>Loading</Loader>
                </Dimmer>
            )
        }

        return (
            <Segment.Group>
                <Segment>
                <Helmet bodyAttributes={{style: 'background-color : #fcfcfc'}}/>
                <Grid columns={1}>
                    <Grid.Row centered columns={3}>
                        <Grid.Column >
                            <LineGraphStatusCounts tribe={this.props.tribe} harness={this.state.harness} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Row centered columns={6}>
                        <Grid.Column>
                            <CategoryCard tribe={this.props.tribe} harness={this.state.harness} category="Address" />
                        </Grid.Column>
                        <Grid.Column>
                            <CategoryCard tribe={this.props.tribe} harness={this.state.harness} category="Direct" />
                        </Grid.Column>
                        <Grid.Column>
                            <CategoryCard tribe={this.props.tribe} harness={this.state.harness} category="Email" />
                        </Grid.Column>
                        <Grid.Column>
                            <CategoryCard tribe={this.props.tribe} harness={this.state.harness} category="Inventory" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered columns={6}>
                        <Grid.Column>
                            <CategoryCard tribe={this.props.tribe} harness={this.state.harness} category="Pricing" />
                        </Grid.Column>
                        <Grid.Column>
                            <CategoryCard tribe={this.props.tribe} harness={this.state.harness} category="Product" />
                        </Grid.Column>
                        <Grid.Column>
                            <CategoryCard tribe={this.props.tribe} harness={this.state.harness} category="Store" />
                        </Grid.Column>
                        <Grid.Column>
                          <CategoryCard tribe={this.props.tribe} harness={this.state.harness} category="Salesforce" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid>
                <Grid.Row>
                     <TimerX start={Date.now()} />
                    <TestDetails tribe = {this.props.tribe} harness = {this.state.harness} />
                </Grid.Row>
            </Grid>
            </Segment>
            </Segment.Group>
        )
    }
}

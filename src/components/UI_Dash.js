import React, { Component } from 'react'
import {  Grid, Segment } from 'semantic-ui-react'
import Helmet from 'react-helmet'

import CategoryCard from '../components/CategoryCard'
import TestDetails from '../components//TestDetails'
import LineGraphStatusCounts from '../components/graphs/LineGraphStatusCounts'

export default class UI_dash extends Component {
    constructor(props) {
        super(props)

        this.state = {
            harness: 'Selenium'
        }
    }

    render() {

        return (
            <div>
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
                <Grid centered columns={6}>
                    <Grid.Row >
                    <Grid.Column>
                        <CategoryCard tribe={this.props.tribe} harness={this.state.harness} category="Shop X" />
                        </Grid.Column>
                        <Grid.Column>
                        <CategoryCard tribe={this.props.tribe} harness={this.state.harness} category="Checkout" />
                        </Grid.Column>
                        <Grid.Column>
                        <CategoryCard tribe={this.props.tribe} harness={this.state.harness} category="Order Assist" />
                        </Grid.Column>
                        <Grid.Column>
                        <CategoryCard tribe={this.props.tribe} harness={this.state.harness} category="Order Management" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid>
                <Grid.Row>
                    <TestDetails tribe = {this.props.tribe} harness = {this.state.harness}/>
                </Grid.Row>
            </Grid>
            </Segment>
            </Segment.Group>
            </div>
        )
    }
}

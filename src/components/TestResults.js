import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Container, Grid, Dimmer, Loader } from 'semantic-ui-react'

import BarGraphPassFail from '../components/BarGraphPassFail'
import PieGraphBrowsers from '../components/PieGraphBrowsers'
import LineGraph from '../components/LineGraphTestDuration'
import TableResults from '../components/TableResults'

class TestResults extends React.Component {

    constructor() {
        super();
        this.state = {
            ios: 'ios',
            edge: 'edge',
            chrome: 'chrome',
            firefox: 'firefox'
        }
    }

	render () {
	   if (this.props.data.loading) {
			return (
              <Dimmer active inverted>
                <Loader size='massive' inverted content='Looking for Cheese...' />
              </Dimmer>
			)
        }

		return (
                <Container>
                    <Grid celled='internally' textAlign="center">
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <BarGraphPassFail/>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <LineGraph/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid celled textAlign="center">
                        <Grid.Row >
                            <b>Browser Health</b>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={4}>
                                <PieGraphBrowsers browser={this.state.chrome}/>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <PieGraphBrowsers browser={this.state.ios}/>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <PieGraphBrowsers browser={this.state.edge}/>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <PieGraphBrowsers browser={this.state.firefox}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Container>
                        <TableResults allTestResultses={this.props.data.allTestResultses}/>
                    </Container>
                </Container>
        )
    }
}

const TestListQuery = gql`
	query allTestResultses {
		allTestResultses(orderBy: createdAt_DESC) {
			id
			createdAt
			products {name}
			os
			browser
			testname
			buildNumber
			testStatus
	}
}`


export default graphql(TestListQuery)(TestResults)
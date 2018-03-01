import React from 'react'
import { Container, Grid, Dimmer, Loader, Segment } from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import LineGraph from './LineGraph'
import TableResults from './TableResults'
import LineGraphTestDuration from './LineGraphTestDuration'
import PieGraphBrowsers from './PieGraphProductHealth'
import ProductStats from './ProductStats'

class Home extends React.Component {
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
        return (
            <Container>
                    <Grid textAlign="center" divided>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                 <ProductStats />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <ProductStats/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                 <LineGraphTestDuration />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <LineGraph/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Container>
                        <Grid textAlign="center" divided>
                            <Grid.Row celled>
                               <b>Product Health</b>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <PieGraphBrowsers />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <PieGraphBrowsers />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
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


export default graphql(TestListQuery)(Home)
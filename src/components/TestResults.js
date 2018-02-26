import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography';

import BarGraphPassFail from '../components/BarGraphPassFail'
import PieGraphBrowsers from '../components/PieGraphBrowsers'
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
			return (<div className='w-100 flex justify-center'>Loading...</div>)
        }

		return (
		        <Grid container>
                    <Grid container spacing={24} justify='center'>
                        <Grid item xs={3}>
                            <Paper>
                                <BarGraphPassFail/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper>
                                <TableResults allTestResultses={this.props.data.allTestResultses}/>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container justify='center' spacing={24}>
                        <Grid item xs={4} >
                            <Typography variant="headline" component="h2">
                                Browser Health
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={24}>
                        <Grid item xs={2}>
                            <Paper>
                                <PieGraphBrowsers browser={this.state.chrome}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={2}>
                            <Paper>
                                <PieGraphBrowsers browser={this.state.ios}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={2}>
                            <Paper>
                                <PieGraphBrowsers browser={this.state.edge}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={2}>
                            <Paper>
                                <PieGraphBrowsers browser={this.state.firefox}/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
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
import React from 'react'
import {  Grid, Image, Statistic, Icon } from 'semantic-ui-react'

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
        <div>
            <Statistic.Group widths='four'>
                <Statistic color='violet'>
                    <Statistic.Value>42,154</Statistic.Value>
                    <Statistic.Label>Tests Ran</Statistic.Label>
                </Statistic>
                <Statistic color='teal'>
                    <Statistic.Value>220:45:56</Statistic.Value>
                    <Statistic.Label>Hours Saved</Statistic.Label>
                </Statistic>
                <Statistic color='green'>
                    <Statistic.Value>
                        <Icon name='bullseye' />
                        94%
                    </Statistic.Value>
                    <Statistic.Label color='teal'>Success</Statistic.Label>
                </Statistic>
                <Statistic color='red'>
                    <Statistic.Value>
                        <Icon name='thumbs down' />
                        6%
                    </Statistic.Value>
                    <Statistic.Label>Failures</Statistic.Label>
                </Statistic>
            </Statistic.Group>

            <Grid centered aligned relaxed='very'>
                <Grid.Row >
                    <Grid.Column width={8} centered>
                         <LineGraphTestDuration />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>


        )
    }
}


export default Home
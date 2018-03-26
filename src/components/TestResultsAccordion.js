import React, { Component } from 'react'
import {Button, Grid, Icon, Modal, Accordion, Loader, Dimmer, Label } from 'semantic-ui-react'
import _ from 'lodash'

import TestResultsHistoryModal from './TestResultsHistoryModal'
import TestSummary from './TestSummary'
import TestSteps from './TestSteps'
import LastRunSummary from './LastRunSummary'
import PieGraphBrowsers from './graphs/PieGraphBrowsers'

class TestResultsAccordion extends Component {

    render() {

        if( this.props.test_data === undefined ) {
            return (
                <Dimmer inverted active>
                    <Loader size='tiny'>Loading</Loader>
                </Dimmer>
            )
        }

        const rootPanels = _.times(this.props.test_data.length, i => ({
            title: {
                content:
                    <Label color={this.getStatusColor(this.props.test_data[i].result)}>
                        {this.props.test_data[i].dateofexecution}
                        <div>{this.props.test_data[i].description}</div>
                    </Label>,
                    key: `title-${i}`,
            },
            content: {
                content: (
                    <div>
                        {this.showHistory(this.props.showHistoryButton, this.props.test_data[i], this.props.squad, this.props.harness)}
                        <TestSteps testSteps={this.props.test_data[i].teststeps}/>
                    </div>
                ),
                key: `content-${i}`,
            },
        }))

        return (
            <Accordion fluid styled exclusive={false} panels={rootPanels}/>
        )
    }

    showHistory(showHistoryButton, test_data, squad, harness) {
        if (showHistoryButton === 'true') {
            return (
                <div>
                    show history true
                    <TestSummary testRecord={test_data} showHistoryButton={showHistoryButton} harness={harness}/>
                    <TestResultsHistoryModal showHistoryButton={showHistoryButton} test_data={test_data} squad={squad} harness={harness} />
                 </div>
            )
        } else {
           return (
                <div>
                   show history false
                    <TestSummary testRecord={test_data} showHistoryButton={showHistoryButton} harness={harness}/>
                </div>
            )
        }

        return 'something didn\'t work'
    }

    getStatusColor(result) {
        var color = "pink";

        if (result === 'Passed') {
          color = "green";
        } else if (result === 'Failed') {
          color = "red";
        } else if (result === 'Skipped') {
          color = "yellow";
        } else if (result === 'Inconclusive') {
            color = 'grey'
        }
        return color;
    }
}

export default TestResultsAccordion

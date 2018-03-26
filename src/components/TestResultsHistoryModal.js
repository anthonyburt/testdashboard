import React, { Component } from 'react'
import { Button, Icon, Grid, Modal } from 'semantic-ui-react'

import TestResultsAccordion from './TestResultsAccordion'
import LastRunSummary from './LastRunSummary'
import PieGraphBrowsers from './graphs/PieGraphBrowsers'

class TestResultsHistoryModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showHistoryButton: '',
        }

    }

    handleClick = (e, { value }) => this.setState({ showHistoryButton: "false" })

    render() {

        return (
            <Modal trigger={
                <Button
                    floated ='right'
                    color='black'
                    onClick={this.handleClick}
                >
                    <Icon name='history' />
                    History
                </Button>}>
                <Modal.Header>{this.props.test_data.description}</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row >
                            <Grid.Column width={6} >
                                <PieGraphBrowsers />
                            </Grid.Column>
                            <Grid.Column width={10} >
                                <LastRunSummary squad = {this.props.squad} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <TestResultsAccordion test_data={this.props.test_data} harness={this.props.harness} squad={this.props.squad} showHistoryButton={this.state.showHistoryButton} />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        )
    }
}

export default TestResultsHistoryModal



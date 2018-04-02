import React, { Component } from 'react'
import {Modal, Grid, Button, Icon} from 'semantic-ui-react'

import LineGraphStatusCounts from './graphs/LineGraphStatusCounts'
import TestSummary from './TestSummary'

class MoldaHistory extends Component {

    render() {

        return (
            <Modal size='large' trigger={
                <Button floated ='right' color='black'>
                    <Icon name='history' />
                    History
                </Button>}>
                <Modal.Header>{this.props.testRecord.description}</Modal.Header>
                    <Modal.Content>
                        <Grid centered>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <LineGraphStatusCounts tribe={this.props.tribe} harness={this.props.harness} testRecord={this.props.testRecord.testcase} />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <TestSummary testRecord={this.props.testRecord} includeHistory='true' harness={this.props.harness} tribe={this.props.tribe} category={this.props.testRecord.category} />
                            </Grid.Row>
                      </Grid>
                    </Modal.Content>
            </Modal>
        )
    }
}

export default MoldaHistory









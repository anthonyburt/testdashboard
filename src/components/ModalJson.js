import React, { Component } from 'react'
import {Grid, Modal, Button, Icon, Table} from 'semantic-ui-react'
import ReactJson from 'react-json-view'
import deepDiff from 'deep-diff-object'


class ModalJson extends Component {
    constructor(props) {
    super(props)

        this.state = {
           lastPassed: JSON.parse('{"user_id" : "XXCDBWN","password" :"ABCDBWN" ,"date_of_join" : "15/10/2010" ,"education" :"B.C.A." , "profession" : "DEVELOPER","interest" : "MUSIC","community_name" :["MODERN MUSIC", "CLASSICAL MUSIC","WESTERN MUSIC"],"community_moder_id" : ["MR. BBB","MR. JJJ","MR MMM"],"community_members" : [500,200,1500],"friends_id" : ["MMM123","NNN123","OOO123"],"ban_friends_id" :["BAN123","BAN456","BAN789"]}'),
           diff: ''
        }
    }

    handleOpen = () => {
        this.compareJson(this.state.lastPassed, this.props.testRecord.responseJson)
        console.log('in open')
        console.log(this.state.diff)
    }

    handleClose = () => {
        this.setState({ diff: {} })
        console.log('in close')
        console.log(this.state.diff)
    }

    render() {

        return (
            <div>
            <Modal
                size='large'
                trigger={
                    <Button floated ='right' color='purple'>
                        <Icon name='code' />
                        Json
                    </Button>
                }
                onOpen={this.handleOpen}
                onClose={this.handleClose}
            >
                <Modal.Header>JSON response for {this.props.testRecord.description}</Modal.Header>
                <Modal.Content>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Last Passed Response</Table.HeaderCell>
                                <Table.HeaderCell>Diff</Table.HeaderCell>
                                <Table.HeaderCell>Current Test Response</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell verticalAlign='top'><ReactJson src={this.props.testRecord.responseJson} theme="summerfruit:inverted" /></Table.Cell>
                                <Table.Cell verticalAlign='top'><ReactJson src={this.state.diff} theme="chalk" /></Table.Cell>
                                <Table.Cell verticalAlign='top'><ReactJson src={this.state.lastPassed} theme="summerfruit:inverted" /></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Modal.Content>
              </Modal>
              </div>
        )
    }

    compareJson(lastPassed, jsonNew) {
        this.setState({ diff: deepDiff(lastPassed, jsonNew) })
        console.log(this.state.diff)
    }

}

export default ModalJson










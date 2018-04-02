import React, { Component } from 'react'
import {Modal, Button, Icon, Table} from 'semantic-ui-react'
import ReactJson from 'react-json-view'
import deepDiff from 'deep-diff-object'

const lastPassed = JSON.parse('{"user_id" : "XXCDBWN","password" :"ABCDBWN" ,"date_of_join" : "15/10/2010" ,"education" :"B.C.A." , "profession" : "DEVELOPER","interest" : "MUSIC","community_name" :["MODERN MUSIC", "CLASSICAL MUSIC","WESTERN MUSIC"],"community_moder_id" : ["MR. BBB","MR. JJJ","MR MMM"],"community_members" : [500,200,1500],"friends_id" : ["MMM123","NNN123","OOO123"],"ban_friends_id" :["BAN123","BAN456","BAN789"]}')

class ModalJson extends Component {

    render() {

        return (
            <Modal size='large' trigger={
                <Button floated ='right' color='purple'>
                    <Icon name='code' />
                    Json
                </Button>}>
                <Modal.Header>JSON response for {this.props.description}</Modal.Header>
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
                                <Table.Cell verticalAlign='top'><ReactJson src={this.props.responseJson} theme="summerfruit:inverted" /></Table.Cell>
                                <Table.Cell verticalAlign='top'>{this.compareJson(lastPassed, this.props.responseJson)}</Table.Cell>
                                <Table.Cell verticalAlign='top'><ReactJson src={lastPassed} theme="summerfruit:inverted" /></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Modal.Content>
              </Modal>
        )
    }

    compareJson(lastPassed, jsonNew) {
        const result = deepDiff(lastPassed, jsonNew);

        return (
            <div>
                <ReactJson src={result} theme="chalk" />
            </div>
        )
    }

}

export default ModalJson










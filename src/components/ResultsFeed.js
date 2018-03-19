import React, { Component } from 'react'
import { Accordion, Icon, Label, Table, Comment, Form, Header, Button } from 'semantic-ui-react'

class ResultsFeed extends Component {

    render() {

        const level1Panels = [
              { title: 'Step 1', content: 'Find a couch' },
              { title: 'Step 2', content: 'Buy a couch' },
            ]

        const Level1Content = (
            <Accordion.Accordion panels={level1Panels} exclusive={false} fluid styled />
        )

        const level2Panels = [
          { title: 'Step 1', content: '<Icon> Verify initial store'},
          { title: 'Step 2', content: 'Change store' },
          { title: 'Step 3', content: 'Verify updated store' }
        ]

        const Level2Content = (
            <Accordion.Accordion panels={level2Panels} exclusive={false} fluid styled />
        )

        const rootPanels = [
            {
                title: {
                    content: <Label color='green' content='Buy a couch' />, key: `title-1`,
                },
                content: {
                    content: (
                        <div>
                            <Table celled color='green'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Description</Table.HeaderCell>
                                        <Table.HeaderCell>Message</Table.HeaderCell>
                                        <Table.HeaderCell>Duration</Table.HeaderCell>
                                     </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>A useful description</Table.Cell>
                                        <Table.Cell>Success</Table.Cell>
                                        <Table.Cell>00:54:22</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>

                            <Comment.Group threaded >
                                <Header as='h3' dividing>Comments</Header>

                                <Comment>

                                  <Comment.Content>
                                    <Comment.Author as='a'>Anthony</Comment.Author>
                                    <Comment.Metadata>
                                      <div>Today at 5:42PM</div>
                                    </Comment.Metadata>
                                    <Comment.Text>This never works!</Comment.Text>
                                    <Comment.Actions>
                                      <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                  </Comment.Content>
                                </Comment>

                                <Comment>

                                  <Comment.Content>
                                    <Comment.Author as='a'>Edwin</Comment.Author>
                                    <Comment.Metadata>
                                      <div>Yesterday at 12:30AM</div>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                      <p>Let's meet tomorrow and see how we can get it back to passing'</p>
                                    </Comment.Text>
                                    <Comment.Actions>
                                      <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                  </Comment.Content>
                                  <Comment.Group>
                                    <Comment>

                                      <Comment.Content>
                                        <Comment.Author as='a'>Ashley</Comment.Author>
                                        <Comment.Metadata>
                                          <div>Just now</div>
                                        </Comment.Metadata>
                                        <Comment.Text>
                                          Perfect, invite me too!
                                        </Comment.Text>
                                        <Comment.Actions>
                                          <Comment.Action>Reply</Comment.Action>
                                        </Comment.Actions>
                                      </Comment.Content>
                                    </Comment>
                                  </Comment.Group>
                                </Comment>

                                <Comment>

                                  <Comment.Content>
                                    <Comment.Author as='a'>Becca</Comment.Author>
                                    <Comment.Metadata>
                                      <div>5 days ago</div>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                      Ugh, This test!
                                    </Comment.Text>
                                    <Comment.Actions>
                                      <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                  </Comment.Content>
                                </Comment>

                                <Form reply>
                                  <Form.TextArea />
                                  <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                                </Form>
                              </Comment.Group>
                      </div>
                    ),
                    key: `content-1`,
                }
            },
            {
                title: {
                    content: <Label color='red' content='Login and pay' />, key: `title-2`,
                },
                content: {
                    content: (
                        <div>
                            <Table celled  color='red'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Description</Table.HeaderCell>
                                        <Table.HeaderCell>Message</Table.HeaderCell>
                                        <Table.HeaderCell>Duration</Table.HeaderCell>
                                     </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>A useful description</Table.Cell>
                                        <Table.Cell>'Attention: COULD NOT FIND SEARCH ITEM FOR FILTER: '['Stores'].[*].['TaxRate'] FOR API AllStoresByPostalCodeAPI 'PLEASE VERIFY DATA ITEM EXISTS FOR RESPONSE!!!'</Table.Cell>
                                        <Table.Cell>00:54:22</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>

                            <Comment.Group threaded>
                                <Header as='h3' dividing>Comments</Header>

                                <Comment>

                                  <Comment.Content>
                                    <Comment.Author as='a'>Anthony</Comment.Author>
                                    <Comment.Metadata>
                                      <div>Today at 5:42PM</div>
                                    </Comment.Metadata>
                                    <Comment.Text>This never works!</Comment.Text>
                                    <Comment.Actions>
                                      <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                  </Comment.Content>
                                </Comment>

                                <Comment>

                                  <Comment.Content>
                                    <Comment.Author as='a'>Edwin</Comment.Author>
                                    <Comment.Metadata>
                                      <div>Yesterday at 12:30AM</div>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                      <p>Let's meet tomorrow and see how we can get it back to passing'</p>
                                    </Comment.Text>
                                    <Comment.Actions>
                                      <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                  </Comment.Content>
                                  <Comment.Group>
                                    <Comment>

                                      <Comment.Content>
                                        <Comment.Author as='a'>Ashley</Comment.Author>
                                        <Comment.Metadata>
                                          <div>Just now</div>
                                        </Comment.Metadata>
                                        <Comment.Text>
                                          Perfect, invite me too!
                                        </Comment.Text>
                                        <Comment.Actions>
                                          <Comment.Action>Reply</Comment.Action>
                                        </Comment.Actions>
                                      </Comment.Content>
                                    </Comment>
                                  </Comment.Group>
                                </Comment>

                                <Comment>

                                  <Comment.Content>
                                    <Comment.Author as='a'>Becca</Comment.Author>
                                    <Comment.Metadata>
                                      <div>5 days ago</div>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                      Ugh, This test!
                                    </Comment.Text>
                                    <Comment.Actions>
                                      <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                  </Comment.Content>
                                </Comment>

                                <Form reply>
                                  <Form.TextArea />
                                  <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                                </Form>
                              </Comment.Group>
                      </div>
                    ),
                    key: `content-2`,
                }
            }
        ]

        return (
              <Accordion defaultActiveIndex={0} panels={rootPanels} exclusive={false} fluid styled />
        )
    }

}

export default ResultsFeed




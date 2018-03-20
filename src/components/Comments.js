import React, { Component } from 'react'
import { Comment, Form, Header, Button } from 'semantic-ui-react'

class Comments extends Component {

    render() {

        return  (
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
        )
    }
}

export default Comments


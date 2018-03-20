import React, { Component } from 'react'
import { Accordion, Icon, Label, Table, Comment, Form, Header, Button } from 'semantic-ui-react'
import TestResultsTable from './TestResultsTable'
import Comments from './Comments'

class ResultsFeed extends Component {

    render() {

        const rootPanels = [
            {
                title: {
                    content: <Label color='green' content='Buy a couch' />, key: `title-1`,
                },
                content: {
                    content: (
                        <div>
                            <TestResultsTable />
                            <Comments />
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
                            <TestResultsTable />
                            <Comments />
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




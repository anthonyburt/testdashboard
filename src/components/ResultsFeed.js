import React, { Component } from 'react'
import { Accordion } from 'semantic-ui-react'

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
          { title: 'Lease a couch', content: { content: Level1Content, key: 'content-1' } },
          { title: 'Select a new store', content: { content: Level2Content, key: 'content-2' } },
          { title: 'Trigger an abandoned cart', content: { content: Level2Content, key: 'content-3' } },
          { title: 'Complete a quote', content: { content: Level2Content, key: 'content-4' } },
          { title: 'Change localization', content: { content: Level2Content, key: 'content-5' } },
          { title: 'Buy a mattress', content: { content: Level2Content, key: 'content-6' } },
          { title: 'Browse categories', content: { content: Level2Content, key: 'content-7' } },
          { title: 'Browse sub categories', content: { content: Level2Content, key: 'content-8' } },
          { title: 'Change location on the product description page', content: { content: Level2Content, key: 'content-9' } },
          { title: 'Change location on the sub category page', content: { content: Level2Content, key: 'content-10' } },
        ]

        return (
              <Accordion defaultActiveIndex={-1} panels={rootPanels} exclusive={false} fluid styled />
        )
    }

}

export default ResultsFeed




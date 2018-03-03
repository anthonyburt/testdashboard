import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Summary', render: () => <Tab.Pane loading>Tab 1 Content</Tab.Pane> },
  { menuItem: 'UI', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'API', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const ShopX = () => (
  <Tab panes={panes} />
)

export default ShopX

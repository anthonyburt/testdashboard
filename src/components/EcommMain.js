import React from 'react'
import TestResults from './/TestResults'
import Helmet from 'react-helmet'

const EcommMain = () => (
  <div>
      <Helmet bodyAttributes={{style: 'background-color : #c8e6c9'}}/>
    <h1>Welcome to the Ecomm!!</h1>
    <TestResults />
  </div>
)

export default EcommMain
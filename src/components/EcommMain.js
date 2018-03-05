import React from 'react'
import TestResults from './/TestResults'
import Helmet from 'react-helmet'

const EcommMain = () => (
  <div>
      <Helmet bodyAttributes={{style: 'background-color : ##d2d5db'}}/>
    <h1>Welcome to the Ecomm!!</h1>
    <TestResults />
  </div>
)

export default EcommMain
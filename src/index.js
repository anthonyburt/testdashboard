import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import "react-d3-treemap/dist/react.d3.treemap.css"
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './index.css'
import App from './app'

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
),
document.getElementById('root')
)
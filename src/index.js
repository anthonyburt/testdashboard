import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import "../node_modules/react-vis/dist/style.css"
import "react-d3-treemap/dist/react.d3.treemap.css"
import './index.css'
import App from './app'

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
),
document.getElementById('root')
)
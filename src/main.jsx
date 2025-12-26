  

import React  from 'react'
import ReactDOM  from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import App from './App.jsx'

const Root = ReactDOM.createRoot(document.getElementById('root'))
Root.render(
  <React.StrictMode>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </React.StrictMode>

);

/*

import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

const Root = ReactDOM.createRoot(document.getElementById('root'))
  Root.render  (

  <React.StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>
  )*/
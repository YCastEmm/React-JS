import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Seccion, FragmentImportado} from "./App.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Seccion />
    <FragmentImportado />
  </React.StrictMode>,
)

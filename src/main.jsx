
import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterWhitCustomHooks } from './01-useState/CounterWhitCustomHooks'
import {HookApp} from './HookApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWhitCustomHooks />
  </React.StrictMode>
)

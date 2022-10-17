
import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormWhitCustomHook } from './02-useEffect/FormWhitCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import {HookApp} from './HookApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <FocusScreen />
 
  //</React.StrictMode>
)

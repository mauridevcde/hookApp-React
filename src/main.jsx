
import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormWhitCustomHook } from './02-useEffect/FormWhitCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/layout'
import Memorize from './06-memos/Memorize'
import {HookApp} from './HookApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <Memorize />
 
  //</React.StrictMode>
)

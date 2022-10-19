
import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormWhitCustomHook } from './02-useEffect/FormWhitCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/layout'
import { CallbackHook } from './06-memos/CallbackHook'
import MemoHook from './06-memos/MemoHook'
import Memorize from './06-memos/Memorize'
import { Padre } from './07-tareaMemo/Padre'
import {HookApp} from './HookApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <Padre />
 
  //</React.StrictMode>
)

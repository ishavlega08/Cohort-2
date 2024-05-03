import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './UseEffect.jsx'
import App2 from './UseMemo.jsx'
import App3 from './UseCallback.jsx'
import App4 from './CustomHooks.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    <App4 />
  </React.StrictMode>,
)

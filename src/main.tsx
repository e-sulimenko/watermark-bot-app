import React from 'react'
import ReactDOM from 'react-dom/client'

import { HostPage } from './modules/_host';

import './libs/telegram-web-app.js';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HostPage />
  </React.StrictMode>,
)

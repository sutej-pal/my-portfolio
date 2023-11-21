import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'

// bootstrap JS Bundle

import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

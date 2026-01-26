import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/style.css'

// Add FontAwesome CDN content by import or keep in index.html. 
// We are keeping index.html changes minimal, but we need to ensure FA is available.
// The user's original index.html had the FA link. We should probably keep it there in index.html too,
// or import it here if we installed it. We didn't install FA, so we rely on index.html.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

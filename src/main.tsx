import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Import Inter font
import '@fontsource/inter/400.css'; // Regular
import '@fontsource/inter/600.css'; // Semi-Bold
import '@fontsource/inter/700.css'; // Bold

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

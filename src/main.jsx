import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './LanguageContext.jsx'
import App from './App.jsx'
import Portfolio from './Portfolio.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </HashRouter>
    </LanguageProvider>
  </React.StrictMode>,
)

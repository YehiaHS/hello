import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LanguageProvider } from './LanguageContext.jsx'
import App from './App.jsx'
import Portfolio from './Portfolio.jsx'
import './index.css'

const basename = import.meta.env.BASE_URL

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
)

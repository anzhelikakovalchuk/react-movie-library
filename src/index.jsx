import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'
import ErrorBoundary from './components/ErrorBoundary'
import "./index.css"

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

// za mega menu
import "primereact/resources/themes/viva-light/theme.css"
import 'primeicons/primeicons.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

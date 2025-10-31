import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

// za mega menu
import "primereact/resources/themes/viva-light/theme.css"
import 'primeicons/primeicons.css';

import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain='dev-c24w7chidrgys2ka.us.auth0.com'
      clientId='hokbIYBe4WZlFk5EngacZQBXrpqxYluP'
      authorizationParams={{redirect_uri: globalThis.location.origin}}>
      <App />
    </Auth0Provider>
  </StrictMode>,
)

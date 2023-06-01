import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
// import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    // <Auth0Provider
    //   domain="kahu-2023-shirley.au.auth0.com"
    //   clientId="Ed9zxntH8LptfNwcO3eshWcKx4OMy1ul"
    //   redirectUri={window.location.origin}
    //   audience="https://nook/api"
    // >
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    // </Auth0Provider>
  )
})

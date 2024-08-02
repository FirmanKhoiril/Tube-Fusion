import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

const queryClient = new QueryClient()

const PUBLISHABLE_KEY = "pk_test_Y2F1c2FsLW1vbml0b3ItMzMuY2xlcmsuYWNjb3VudHMuZGV2JA" || import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <Router>
          <App />
        </Router>
      </ClerkProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

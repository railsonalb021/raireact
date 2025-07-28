import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'

// eslint-disable-next-line typescript/no-non-null-assertion
createRoot(document.querySelector('#root')!).render(<StrictMode>
  <App />
</StrictMode>)

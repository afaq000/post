import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import PopularCard from './components/PopularCard'
import App from './App.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />

    {/* <PopularCard/> */}
  </StrictMode>,
)

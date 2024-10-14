import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GameGallery from './GameGallery'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameGallery />
  </StrictMode>,
)

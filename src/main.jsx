import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GameGallery from './GameGallery'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameGallery />
  </StrictMode>,
)

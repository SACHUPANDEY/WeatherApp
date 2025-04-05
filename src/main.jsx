import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Tempapp from './components/Tempapp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tempapp></Tempapp>
  </StrictMode>,
)

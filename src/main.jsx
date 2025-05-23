import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css";
import ContextWrapper from './context/GameContext.jsx';

createRoot(document.getElementById('root')).render(
  <ContextWrapper>
    <App />
  </ContextWrapper>,
)

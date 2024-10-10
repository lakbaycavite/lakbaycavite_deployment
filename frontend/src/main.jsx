import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PostsContextProvider } from './context/postContext.jsx'
import { EventsContextProvider } from './context/eventContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventsContextProvider>
      <PostsContextProvider>
        <App />
      </PostsContextProvider>
    </EventsContextProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StateContextProvider } from './context.tsx'
import routes from './routes.tsx'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateContextProvider>
      <RouterProvider router={router} />
    </StateContextProvider>
  </StrictMode>,
)

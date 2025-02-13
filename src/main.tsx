import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './utils/store.ts'
import {
  AuthPage,
  ErrorPage,
  FilmsPage,
  HomePage,
  PeoplePage,
  VehiclePage,
} from '@pages/index.ts'
import Layout from './Layout.tsx'
import './index.css'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'films',
          element: <FilmsPage />,
        },
        {
          path: 'vehicle',
          element: <VehiclePage />,
        },
        {
          path: 'people',
          element: <PeoplePage />,
        },
      ],
    },
    {
      path: '/auth',
      element: <AuthPage />,
      errorElement: <ErrorPage />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </Provider>
  </StrictMode>,
)

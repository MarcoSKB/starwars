import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './utils/store.ts'
import {
  AuthPage,
  ErrorPage,
  FilmDetailPage,
  FilmsPage,
  HomePage,
  NotFoundPage,
  PersonDetailPage,
  PeoplePage,
  PlanetDetailPage,
  VehicleDetailPage,
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
          index: true,
          element: <HomePage />,
        },
        {
          path: 'planets',
          element: <Navigate to='/' replace />,
        },
        {
          path: 'planets/:planetId',
          element: <PlanetDetailPage />,
        },
        {
          path: 'films',
          element: <FilmsPage />,
        },
        {
          path: 'films/:filmId',
          element: <FilmDetailPage />,
        },
        {
          path: 'vehicle',
          element: <VehiclePage />,
        },
        {
          path: 'vehicle/:vehicleId',
          element: <VehicleDetailPage />,
        },
        {
          path: 'people',
          element: <PeoplePage />,
        },
        {
          path: 'people/:personId',
          element: <PersonDetailPage />,
        },
        {
          path: '*',
          element: <NotFoundPage />,
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
    basename: import.meta.env.BASE_URL,
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

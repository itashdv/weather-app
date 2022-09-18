import { StrictMode } from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useParams,
} from 'react-router-dom';

import App from './App';
import { ErrorPage, Locations } from './components';
import './index.css';

const Location = () => {
  const { locationId } = useParams();

  return (
    <div>{ locationId }</div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Locations />,
      },
      {
        path: '/locations',
        element: <Navigate to='/' />,
      },
      {
        path: 'locations/:locationId',
        element: <Location />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

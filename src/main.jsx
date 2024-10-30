import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// fonts and icons
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/Home.jsx';
import Blog from './assets/blog/Blog.jsx';
import ShopPage from './shop/ShopPage.jsx';  // Correct import

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // App contains <Outlet /> for child routes
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "shop",  // Correct path
        element: <ShopPage />,  // Correct component name
      },
    ],
  },
]);

// Use createRoot to render the app
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

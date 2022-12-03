import AppLayout from 'layout/AppLayout';
import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from 'views/Home';

const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
    {
      path: '*',
      element: <div>404</div>,
    },
  ];

  return useRoutes(routes);
};

export default AppRoutes;

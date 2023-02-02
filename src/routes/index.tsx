import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from '@pages/Login';
import useUser from '@stores/user';
import routes from './routes';

export const AppRoutes = () => {
  const token = useUser((state) => state.jenkins.password);

  const routesBasedOnLogin = token
    ? routes
    : [{ path: '/', element: <Login /> }];

  const element = useRoutes(routesBasedOnLogin);

  return element;
};

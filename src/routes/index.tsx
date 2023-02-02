import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Login from '../pages/Login';
import useUser from '../stores/user';

export const AppRoutes = () => {
  const token = useUser((state) => state.jenkins.password);

  const routesBasedOnLogin = token
    ? routes
    : [{ path: '/', element: <Login /> }];

  const element = useRoutes(routesBasedOnLogin);

  return element;
};

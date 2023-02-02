import { AppProvider } from './providers/AppProvider';
import { AppRoutes } from './routes';
import './App.css';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  import('./mocks/browser').then(({ worker }) => worker.start());
}

export const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

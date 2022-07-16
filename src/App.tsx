import { useRoutes } from 'react-router-dom';
import Routes from '@/constants/Routes';
import React from 'react';

const App: React.FC = () => {
  return useRoutes(Routes);
};

export default App;

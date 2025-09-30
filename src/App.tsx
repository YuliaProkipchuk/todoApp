import React from 'react';
import { UserWarning } from './UserWarning';
import { USER_ID } from './api/todos';
import HomePage from './components/HomePage';

export const App: React.FC = () => {
  if (!USER_ID) {
    return <UserWarning />;
  }

  return <HomePage />;
};

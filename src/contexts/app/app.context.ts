import {createContext, useContext} from 'react';
import {APP_CONTEXT_INITIAL_STATE} from './app.constants';

export const AppContext = createContext(APP_CONTEXT_INITIAL_STATE);

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};

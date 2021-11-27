import {createContext, useContext} from 'react';
import {ROUTER_CONTEXT_INITIAL_STATE} from './router.constants';

export const RouterContext = createContext(ROUTER_CONTEXT_INITIAL_STATE);

export const useRouterContext = () => {
  const context = useContext(RouterContext);

  return context;
};

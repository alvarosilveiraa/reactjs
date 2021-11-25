import {createContext, useContext} from 'react';
import {HEADER_CONTEXT_INITIAL_STATE} from './header.constants';

export const HeaderContext = createContext(HEADER_CONTEXT_INITIAL_STATE);

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);

  return context;
};

import {createContext, useContext} from 'react';
import {TOLKIT_CONTEXT_INITIAL_STATE} from './toolkit.constants';

export const ToolkitContext = createContext(TOLKIT_CONTEXT_INITIAL_STATE);

export const useToolkitContext = () => {
  const context = useContext(ToolkitContext);

  return context;
};

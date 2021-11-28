import {createContext, useContext} from 'react';
import {THEME_CONTEXT_INITIAL_STATE} from './theme.constants';

export const ThemeContext = createContext(THEME_CONTEXT_INITIAL_STATE);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  return context;
};

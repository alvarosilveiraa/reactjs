import React, {useState} from 'react';
import {ThemeProvider as ThemeProviderUI} from '@material-ui/core';
import {Theme} from '~/components';
import {ThemeContext} from './theme.context';
import {ThemeProviderType} from './theme.type';
import {theme} from '~/theme';

export const ThemeProvider = ({children}: ThemeProviderType) => {
  const [visible, setVisible] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      <ThemeProviderUI theme={theme}>
        <Theme visible={visible} setVisible={setVisible}>
          {children}
        </Theme>
      </ThemeProviderUI>
    </ThemeContext.Provider>
  );
};

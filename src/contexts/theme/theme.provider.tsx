import React from 'react';
import {ChakraProvider, useDisclosure} from '@chakra-ui/react';
import {Theme} from '~/components';
import {ThemeContext} from './theme.context';
import {ThemeProviderType} from './theme.type';
import {theme} from '~/theme';

export const ThemeProvider = ({children}: ThemeProviderType) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <ThemeContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
      }}
    >
      <ChakraProvider theme={theme}>
        <Theme isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
          {children}
        </Theme>
      </ChakraProvider>
    </ThemeContext.Provider>
  );
};

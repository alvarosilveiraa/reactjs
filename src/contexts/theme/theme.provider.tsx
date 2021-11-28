import React from 'react';
import * as chakra from '@chakra-ui/react';
import {ChakraProvider, useDisclosure} from '@chakra-ui/react';
import {filter} from 'lodash';
import {Theme} from '~/components';
import {ModalProvider} from '../';
import {ThemeContext} from './theme.context';
import {ThemeProviderType} from './theme.type';
import {theme} from '~/theme';

export const ThemeProvider = ({children}: ThemeProviderType) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const chakraData = Object.keys(chakra).map(key => {
    const value = (chakra as any)[key];

    const keys = Object.keys(value);

    if (keys[1] === 'render') {
      return {
        name: key,
        type: 'component',
        value,
      };
    }

    return {
      name: key,
      type: '?',
      value,
    };
  });

  return (
    <ThemeContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
      }}
    >
      <ChakraProvider theme={theme}>
        <ModalProvider themeIsOpen={isOpen}>
          <Theme
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            components={filter(chakraData, {type: 'component'})}
          >
            {children}
          </Theme>
        </ModalProvider>
      </ChakraProvider>
    </ThemeContext.Provider>
  );
};

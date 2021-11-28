import React from 'react';
import {chakra, Box, Input, Text} from '@chakra-ui/react';
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';
import {ThemeType} from './theme.type';

export const Theme = ({isOpen, onOpen, onClose, children}: ThemeType) => (
  <chakra.div display="flex" flexDirection="row">
    <chakra.div flex={1}>{children}</chakra.div>

    <chakra.div
      overflow="hidden"
      position="relative"
      display="flex"
      flexDirection="row"
      width={isOpen ? '400px' : '24px'}
      backgroundColor="#ffffff"
      boxShadow="0 0 4px rgba(0, 0, 0, 0.4)"
      transition="width 200ms"
      zIndex={1}
    >
      <chakra.button
        cursor="pointer"
        display="flex"
        alignItems="center"
        width="24px"
        margin={0}
        padding={0}
        border="none"
        outline="none"
        backgroundColor="#ffffff"
        onClick={() => (isOpen ? onClose?.() : onOpen?.())}
      >
        {isOpen ? (
          <ChevronRightIcon width="24px" />
        ) : (
          <ChevronLeftIcon width="24px" />
        )}
      </chakra.button>

      <Box flex={1}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingY={2}
        >
          <Text variant="h3" color="secondary">
            Theme
          </Text>
        </Box>

        <Box>
          <Input
            width="100%"
            border="1px solid #1a1a1a"
            backgroundColor="#ffffff"
            placeholder="Procurar componente"
          />
        </Box>
      </Box>
    </chakra.div>
  </chakra.div>
);

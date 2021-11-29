import React, {FormHTMLAttributes} from 'react';
import {chakra} from '@chakra-ui/react';
import {Scroll} from '~/components/scroll';

const ChakraScroll = chakra(Scroll);

export const Body = ({children, ...props}: FormHTMLAttributes<HTMLDivElement>) => (
  <ChakraScroll overflow="auto" flex={1} {...props}>
    <chakra.div
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      maxWidth="1400px"
      minHeight="100%"
      margin="0 auto"
    >
      {children}
    </chakra.div>
  </ChakraScroll>
);

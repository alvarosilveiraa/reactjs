import React, {FormHTMLAttributes} from 'react';
import {chakra} from '@chakra-ui/react';

export const Fullscreen = (props: FormHTMLAttributes<HTMLDivElement>) => (
  <chakra.div
    display="flex"
    flexDirection="column"
    width="100%"
    height="100vh"
    backgroundColor="#f4f4f4"
    {...props}
  />
);

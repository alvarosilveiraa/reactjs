import React from 'react';
import {chakra} from '@chakra-ui/react';
import {spinKeyframe} from '~/theme';

export const Spinner = () => (
  <chakra.div
    border="3px solid green.300"
    borderTop="3px solid red.300"
    width="20px"
    height="20px"
    animation={`${spinKeyframe} 600ms linear infinite`}
  />
);

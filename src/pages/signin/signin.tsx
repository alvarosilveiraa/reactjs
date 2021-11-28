import React from 'react';
import {Button} from '@chakra-ui/react';
import {useModalContext} from '~/contexts';

export const SigninPage = () => {
  const {onOpen} = useModalContext();

  return (
    <>
      <p>Signin</p>

      <br />

      <br />

      <Button variant="contained" onClick={() => onOpen?.()}>
        Abrir Modal
      </Button>
    </>
  );
};

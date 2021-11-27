import React from 'react';
import {Button} from '@material-ui/core';
import {useModalContext} from '~/contexts';

export const SigninPage = () => {
  const {setVisible} = useModalContext();

  return (
    <>
      <p>Signin</p>

      <br />

      <br />

      <Button variant="contained" onClick={() => setVisible?.(true)}>
        Abrir Modal
      </Button>
    </>
  );
};

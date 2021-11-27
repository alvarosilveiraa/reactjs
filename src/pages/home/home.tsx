import React from 'react';
import {useModalContext} from '~/contexts';

export const HomePage = () => {
  const {setVisible} = useModalContext();

  return (
    <>
      <p>Home</p>

      <br />

      <br />

      <button onClick={() => setVisible?.(true)}>Abrir Modal</button>
    </>
  );
};

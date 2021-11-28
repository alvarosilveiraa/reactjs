import React from 'react';
import {Button, Heading} from '@chakra-ui/react';
import {useNavigate} from 'react-router';

export const SigninPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Heading marginBottom={8}>Signin</Heading>

      <Button colorScheme="teal" onClick={() => navigate('/')}>
        Entrar
      </Button>
    </>
  );
};

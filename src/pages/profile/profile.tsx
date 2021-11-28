import React from 'react';
import {Link, Heading} from '@chakra-ui/react';
import {useNavigate} from 'react-router';

export const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Heading marginBottom={4}>Profile</Heading>

      <Link as="button" color="teal" onClick={() => navigate('/profile/edit')}>
        Editar Perfil
      </Link>
    </>
  );
};

import React from 'react';
import {Link, chakra} from '@chakra-ui/react';
import {useNavigate} from 'react-router';
import {HeaderType} from './header.type';
import {LinkType} from '~/typings';
import {useRouterContext} from '~/contexts';

export const Header = ({links, height}: HeaderType) => {
  const navigate = useNavigate();
  const {route} = useRouterContext();

  const renderLink = ({name, path, label}: LinkType) => {
    const isActive = name && name === route?.name;

    return (
      <Link
        key={`link-${path}`}
        as="button"
        cursor="pointer"
        marginLeft="4px"
        marginRight="4px"
        color={isActive ? 'white' : 'gray.300'}
        onClick={() => navigate(path)}
      >
        {label}
      </Link>
    );
  };

  return (
    <chakra.div
      backgroundColor="gray.800"
      boxShadow="0 0 4px rgba(0, 0, 0, 0.4)"
    >
      <chakra.div
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
        maxWidth="1400px"
        height={`${height}px`}
        margin="0 auto"
        transition="height 300ms"
      >
        {links?.map(renderLink)}
      </chakra.div>
    </chakra.div>
  );
};

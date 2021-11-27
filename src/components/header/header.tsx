import React from 'react';
import {Link} from '@material-ui/core';
import {HeaderType} from './header.type';
import {Container, Content} from './styles';
import {LinkType} from '~/typings';
import {useNavigate} from 'react-router';
import {useRouterContext} from '~/contexts';

export const Header = ({links, height}: HeaderType) => {
  const navigate = useNavigate();
  const {route} = useRouterContext();

  const renderLink = ({name, path, label}: LinkType) => {
    const isActive = name && name === route?.name;

    return (
      <Link
        key={`link-${path}`}
        variant="button"
        marginLeft="4px"
        marginRight="4px"
        color={isActive ? '#ffffff' : '#cccccc'}
        onClick={() => navigate(path)}
        style={{cursor: 'pointer'}}
      >
        {label}
      </Link>
    );
  };

  return (
    <Container>
      <Content height={height}>{links?.map(renderLink)}</Content>
    </Container>
  );
};

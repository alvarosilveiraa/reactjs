import React from 'react';
import {HeaderType} from './header.type';
import {Container, Content, Link} from './styles';

export const Header = ({links, height}: HeaderType) => (
  <Container>
    <Content height={height}>
      {links?.map(({path, label}) => (
        <Link key={`link-${path}`} to={path}>
          {label}
        </Link>
      ))}
    </Content>
  </Container>
);

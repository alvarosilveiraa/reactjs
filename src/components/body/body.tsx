import React, {FormHTMLAttributes} from 'react';
import {Container, Content} from './styles';

export const Body = ({
  children,
  ...props
}: FormHTMLAttributes<HTMLDivElement>) => (
  <Container {...props}>
    <Content>{children}</Content>
  </Container>
);

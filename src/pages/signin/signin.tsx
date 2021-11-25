import React from 'react';
import {Link} from 'react-router-dom';
import {SigninPageType} from './signin.type';

export const SigninPage = ({title}: SigninPageType) => (
  <>
    <p>{title}</p>

    <br />

    <br />

    <Link to="/">Entrar</Link>
  </>
);

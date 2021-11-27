import {ReactNode} from 'react';
import {LinkType} from '~/typings';

export type AppContextType = {};

export type AppProviderType = {
  headerLinks?: LinkType[];
  children?: ReactNode;
};

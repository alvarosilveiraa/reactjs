import {ReactNode} from 'react';
import {LinkType} from '~/typings';

export type AppContextType = {};

export type AppProviderType = {
  title?: string;
  headerLinks?: LinkType[];
  children?: ReactNode;
};

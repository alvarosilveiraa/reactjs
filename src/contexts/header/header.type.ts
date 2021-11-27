import {ReactNode} from 'react';
import {RouteType} from '~/routes';

export type HeaderContextType = {
  height: number;
  setHeight?: (height: number) => void;
};

export type HeaderProviderType = {
  route: RouteType;
  children: ReactNode;
};

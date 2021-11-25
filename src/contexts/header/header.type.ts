import {ReactNode} from 'react';

export type HeaderContextType = {
  height: number;
  setHeight?: (height: number) => void;
};

export type HeaderProviderType = {
  children: ReactNode;
};

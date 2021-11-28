import {ReactNode} from 'react';

export type ThemeContextType = {
  visible: boolean;
  setVisible?: (visible: boolean) => void;
};

export type ThemeProviderType = {
  children?: ReactNode;
};

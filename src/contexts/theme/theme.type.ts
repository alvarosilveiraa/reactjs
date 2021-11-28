import {ReactNode} from 'react';

export type ThemeContextType = {
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

export type ThemeProviderType = {
  children?: ReactNode;
};

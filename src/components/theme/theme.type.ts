import {ReactNode} from 'react';

export type ThemeType = {
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  children?: ReactNode;
};

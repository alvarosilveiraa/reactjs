import {ReactNode} from 'react';

export type ModalContextType = {
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

export type ModalProviderType = {
  children?: ReactNode;
};

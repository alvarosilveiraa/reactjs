import {ReactNode} from 'react';

export type ModalDataType = {
  title: string;
  body: string;
};

export type ModalContextType = {
  isOpen: boolean;
  onOpen?: (data: ModalDataType) => void;
  onClose?: () => void;
};

export type ModalProviderType = {
  children?: ReactNode;
};

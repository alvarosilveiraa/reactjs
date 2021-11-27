import {ReactNode} from 'react';

export type ModalContextType = {
  visible: boolean;
  setVisible?: (visible: boolean) => void;
};

export type ModalProviderType = {
  children?: ReactNode;
};

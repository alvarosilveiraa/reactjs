import {ReactNode} from 'react';

export type ThemeType = {
  visible?: boolean;
  setVisible?: (visible: boolean) => void;
  children: ReactNode;
};

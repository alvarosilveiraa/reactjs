import {ReactNode} from 'react';
import {ThemeComponent} from '~/theme';

export type ThemeType = {
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  components?: ThemeComponent[];
  children?: ReactNode;
};

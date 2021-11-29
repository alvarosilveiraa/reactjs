import {ReactNode} from 'react';
import {ThemeComponent} from '~/theme';

export type ThemeType = {
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  components?: ThemeComponent[];
  children?: ReactNode;
};

export type ThemeMousePositionType = null | {
  x: number;
  y: number;
  ctrlKey: boolean;
};

export type ThemeRenderModalType = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

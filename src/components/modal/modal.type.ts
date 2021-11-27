import {StyledComponent} from 'styled-components';

export type ModalButtonType = {
  type: string;
  label: string;
  onClick?: any;
  loading?: boolean;
  autoLoading?: boolean;
  disabled?: boolean;
};

export type ModalType = {
  visible?: boolean;
  title?: string;
  width?: number;
  height?: number;
  buttons?: ModalButtonType[];
  fullscreen?: boolean;
  onDismiss?: () => void;
  renderHeader?: any;
  renderContent?: (
    Content: StyledComponent<'div', any>,
    renderButtons?: (
      buttons?: ModalButtonType[],
    ) => JSX.Element | JSX.Element[],
  ) => JSX.Element;
  renderFooter?: any;
  children?: any;
  backgroundColor?: string;
  showBackButton?: boolean;
  onBack?: () => void;
};

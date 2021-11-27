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
  renderContent?: any;
  renderFooter?: any;
  children?: any;
  backgroundColor?: string;
  showBackButton?: boolean;
  onBack?: () => void;
};

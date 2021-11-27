export type ComponentType = {
  show?: boolean;
};

export type OverlayType = {
  visible?: boolean;
  fullscreen?: boolean;
  timeout?: number;
};

export type ContentType = {
  visible?: boolean;
  width: number;
  height: number;
  backgroundColor?: string;
  timeout?: number;
};

export type ContainerType = {
  fullscreen?: boolean;
  backgroundColor?: string;
  timeout?: number;
};

export type ButtonType = {
  variant: string;
  length?: number;
  isLast?: boolean;
};

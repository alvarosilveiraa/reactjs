import {HTMLProps} from 'react';

export type ScrollType = HTMLProps<HTMLDivElement> & {
  onRefreshing?: () => void;
  onLoadingMore?: () => void;
  onScrollToTop?: (e?: any) => void;
  onScrollToBottom?: (e?: any) => void;
};

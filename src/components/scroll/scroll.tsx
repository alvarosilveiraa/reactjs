import React, {useRef, useState} from 'react';
import {Spinner} from '../spinner';
import {ScrollType} from './scroll.type';
import {Container, Content, Loading, LoadingContent} from './styles';

export const Scroll = ({
  onRefreshing,
  onLoadingMore,
  onScrollToTop,
  onScrollToBottom,
  children,
  ...props
}: ScrollType) => {
  const scroll = useRef<HTMLDivElement>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  let lastScrollTop: number;

  const onScroll = async (e: any) => {
    if (!scroll.current) {
      return;
    }

    const {scrollTop, clientHeight, scrollHeight} = scroll.current;

    const sum = scrollTop + clientHeight;

    if (
      lastScrollTop &&
      sum < scrollHeight - 30 &&
      lastScrollTop !== scrollTop
    ) {
      if (lastScrollTop > scrollTop) {
        onScrollToTop?.(e);
      } else if (lastScrollTop < scrollTop) {
        onScrollToBottom?.(e);
      }
    }

    lastScrollTop = scrollTop;

    if (sum <= clientHeight) {
      if (typeof onRefreshing !== 'function' || isRefreshing) {
        return;
      }

      setIsRefreshing(true);

      await onRefreshing?.();

      setIsRefreshing(false);
    } else if (sum >= scrollHeight) {
      if (typeof onLoadingMore !== 'function' || isLoadingMore) {
        return;
      }

      setIsLoadingMore(true);

      await onLoadingMore?.();

      setIsLoadingMore(false);
    }
  };

  const renderLoading = () => (
    <Loading>
      <LoadingContent>
        <Spinner />
      </LoadingContent>
    </Loading>
  );

  return (
    <Container
      ref={scroll}
      onScroll={onScroll}
      style={props.style}
      className={props.className}
    >
      <Content>
        {isRefreshing && renderLoading()}

        {children}

        {isLoadingMore && renderLoading()}
      </Content>
    </Container>
  );
};

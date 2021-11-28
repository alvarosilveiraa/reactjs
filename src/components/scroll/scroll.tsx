import React, {useRef, useState} from 'react';
import {chakra, Spinner} from '@chakra-ui/react';
import {ScrollType} from './scroll.type';

export const Scroll = ({
  onRefreshing,
  onLoadingMore,
  onScrollToTop,
  onScrollToBottom,
  children,
}: ScrollType) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  let lastScrollTop: number;

  const onScroll = async (e: any) => {
    if (!scrollRef.current) {
      return;
    }

    const {scrollTop, clientHeight, scrollHeight} = scrollRef.current;

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
    <chakra.div
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="200px"
    >
      <chakra.div
        padding="12px"
        borderRadius="6px"
        backgroundColor="rgba(0, 0, 0, 0.2)"
      >
        <Spinner />
      </chakra.div>
    </chakra.div>
  );

  return (
    <chakra.div
      position="relative"
      height="100%"
      ref={scrollRef}
      onScroll={onScroll}
    >
      {isRefreshing && renderLoading()}

      {children}

      {isLoadingMore && renderLoading()}
    </chakra.div>
  );
};

import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
  }

  &::-webkit-scrollbar {
    width: 4px;
    background-color: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-color: #cfceca;
  }
`;

export const Content = styled.div`
  position: relative;
  height: 100%;
`;

export const Loading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

export const LoadingContent = styled.div`
  padding: 12px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.2);
`;

import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  width: 16px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  transition: all 200ms;
  z-index: 1;

  &:hover {
    width: 200px;
    background-color: #1a1a1a;
  }
`;

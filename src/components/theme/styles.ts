import styled from 'styled-components';
import {ContentType} from './styles.type';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Flex = styled.div`
  flex: 1;
`;

export const Content = styled.div<ContentType>`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
  width: ${({visible}) => (visible ? '400px' : '24px')};
  background-color: #ffffff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  transition: width 200ms;
  z-index: 1;
`;

export const ExpandArea = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  background-color: #ffffff;
`;

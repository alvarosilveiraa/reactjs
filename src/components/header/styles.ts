import styled from 'styled-components';
import {ContentType} from './styles.type';

export const Container = styled.div`
  background-color: ${({theme}) => theme?.palette?.secondary?.main};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div<ContentType>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  height: ${({height = 56}) => height}px;
  margin: 0 auto;
  transition: height 300ms;
`;

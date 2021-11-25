import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {ContentType, LinkType} from './styles.type';

export const Container = styled.div`
  background-color: #1a1a1a;
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

export const Link = styled(NavLink).attrs(() => ({
  style: ({isActive}: LinkType) => ({
    color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
  }),
}))`
  margin-left: 6px;
  margin-right: 6px;
`;

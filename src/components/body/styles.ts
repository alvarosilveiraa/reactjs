import styled from 'styled-components';
import {Scroll} from '~/components/scroll';

export const Container = styled(Scroll)`
  overflow: auto;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  min-height: 100%;
  margin: 0 auto;
`;

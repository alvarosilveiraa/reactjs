import styled from 'styled-components';

import {
  getTypeBackgroundColor,
  getTypeBackgroundColorHover,
  getTypeColor,
} from './modal.utils';
import {
  ComponentType,
  OverlayType,
  ContentType,
  ContainerType,
  ButtonType,
} from './styles.type';

export const Component = styled.div<ComponentType>`
  visibility: ${({show}) => (show ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`;

export const Overlay = styled.button<OverlayType>`
  opacity: ${({visible}) => (visible ? '1' : '0')};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background-color: rgba(
    0,
    0,
    0,
    ${({fullscreen}) => (fullscreen ? '0.95' : '0.4')}
  );
  transition: opacity ${({timeout}) => timeout}ms;
`;

export const Content = styled.div<ContentType>`
  overflow: hidden;
  opacity: ${({visible}) => (visible ? '1' : '0')};
  position: absolute;
  top: calc(50% - ${({height}) => height / 2}px);
  left: calc(50% - ${({width}) => width / 2}px);
  display: flex;
  flex-direction: column;
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({backgroundColor}) => backgroundColor};
  transform: ${({visible}) => (visible ? 'scale(1)' : 'scale(0.8)')};
  transition: all ${({timeout}) => timeout}ms ease-out;
`;

export const ContentFullscreen = styled.div<ContentType>`
  overflow: hidden;
  opacity: ${({visible}) => (visible ? '1' : '0')};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: transparent;
  transform: ${({visible}) => (visible ? 'scale(1)' : 'scale(0.8)')};
  transition: all ${({timeout}) => timeout}ms ease-out;
`;

export const ContentContainer = styled.div`
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100% - 68px);

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

export const ModalHeaderContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 68px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  background-color: #f2f2f2;
  z-index: 1;
`;

export const HeaderButton = styled.button`
  cursor: ${({onClick}) => (onClick ? 'pointer' : 'default')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin: 0 16px;
  border: none;
  background-color: transparent;
`;

export const ModalTitleStyle = styled.span<any>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  color: #4d2a74;
`;

export const Dismiss = styled.div`
  position: absolute;
  top: 14px;
  right: 16px;
  z-index: 10;

  .MuiSvgIcon-root {
    fill: #cfceca;
  }
`;

export const Container = styled.div<ContainerType>`
  overflow: auto;
  flex: 1;
  background-color: ${({fullscreen, backgroundColor}) =>
    fullscreen ? 'transparent' : backgroundColor};
  transition: background-color ${({timeout}) => timeout}ms;

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

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 16px 0;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button<ButtonType>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 190px;
  height: 46px;
  margin: 0;
  padding: 0 16px;
  border: none;
  outline: none;
  border-radius: 23px;
  ${({variant}) => `
    color: ${getTypeColor(variant)};
    background-color: ${getTypeBackgroundColor(variant)};

    &:hover {
      background-color: ${getTypeBackgroundColorHover(variant)};
    }
  `}
  margin-bottom: ${({length, isLast}) => {
    if (length === 1 || isLast) {
      return '0';
    }

    return '16px';
  }};
  transition: background-color 200ms;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;

  &[type='primary'] {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
  }

  &[type='primary'] {
    /* OttoTitle2 */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
  }

  &:disabled {
    cursor: not-allowed;
    color: #888888;
    background-color: #eaeaea;

    &:hover {
      background-color: #eaeaea;
    }
  }
`;

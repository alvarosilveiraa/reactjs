import React, {useState, useEffect} from 'react';
import {IconButton} from '@material-ui/core';
import {ArrowBack, Close} from '@material-ui/icons';
import {Spinner} from '~/components';
import {MODAL_ANIMATION_TIMEOUT} from './modal.constants';
import {ModalType, ModalButtonType} from './modal.type';
import {
  Component,
  Overlay,
  ModalHeaderContainerStyle,
  HeaderButton,
  Content,
  ContentFullscreen,
  ContentContainer,
  ModalTitleStyle,
  Dismiss,
  Container,
  Buttons,
  Button,
} from './styles';

export const Modal = ({
  visible: visibleProp = false,
  title,
  width = 840,
  height = 410,
  buttons = [],
  onDismiss,
  fullscreen = false,
  renderHeader,
  renderContent,
  renderFooter,
  children,
  backgroundColor = '#FFFFFF',
  showBackButton = false,
  onBack,
}: ModalType): JSX.Element => {
  const [visible, setVisible] = useState(visibleProp);
  const [visibility, setVisibility] = useState(visible);
  const [buttonsLoading, setButtonsLoading] = useState<any[]>([]);

  useEffect(() => {
    if (!visibleProp) {
      setVisible(false);

      setTimeout(() => setVisibility(false), MODAL_ANIMATION_TIMEOUT);
    } else {
      setVisibility(true);

      setVisible(true);
    }
  }, [visibleProp]);

  useEffect(() => {
    document.body.style.overflow = visibility ? 'hidden' : 'auto';
  }, [visibility]);

  const setButtonLoading = (i: number, loading: boolean) => {
    setButtonsLoading(prevButtons => {
      const newButtonsLoading = Array.from(prevButtons);

      newButtonsLoading[i] = loading;

      return newButtonsLoading;
    });
  };

  const renderButton = (
    {
      type,
      label,
      onClick = onDismiss,
      loading = false,
      autoLoading = false,
      disabled,
    }: ModalButtonType,
    length: number,
    i: number,
  ) => (
    <Button
      key={`button-${i}`}
      variant={type}
      onClick={async () => {
        if (autoLoading) {
          setButtonLoading(i, true);
        }

        await onClick?.();

        if (autoLoading) {
          setButtonLoading(i, false);

          onDismiss?.();
        }
      }}
      disabled={disabled || loading || !!buttonsLoading[i]}
      length={length}
      isLast={i === length - 1}
    >
      {label}

      {(loading || !!buttonsLoading[i]) && <Spinner style={{marginLeft: 6}} />}
    </Button>
  );

  const renderButtons = (anotherButtons?: ModalButtonType[]) => {
    if (anotherButtons?.length) {
      return anotherButtons.map((button, i) =>
        renderButton(button, anotherButtons.length, i),
      );
    }

    return (
      <Buttons>
        {buttons.map((button, i) => renderButton(button, buttons.length, i))}
      </Buttons>
    );
  };

  const ContentView = fullscreen ? ContentFullscreen : Content;

  return (
    <Component show={visibility}>
      <Overlay
        visible={visible}
        onClick={onDismiss}
        timeout={MODAL_ANIMATION_TIMEOUT}
        fullscreen={fullscreen}
      />

      <ContentView
        visible={visible}
        width={width}
        height={height}
        timeout={MODAL_ANIMATION_TIMEOUT}
        backgroundColor={backgroundColor}
      >
        {(!!title || showBackButton) && (
          <ModalHeaderContainerStyle>
            {showBackButton ? (
              <HeaderButton onClick={onBack}>
                <ArrowBack />
              </HeaderButton>
            ) : (
              <HeaderButton />
            )}

            <ModalTitleStyle>{title}</ModalTitleStyle>

            <HeaderButton />
          </ModalHeaderContainerStyle>
        )}

        {typeof renderHeader === 'function' && renderHeader()}

        <Dismiss>
          <IconButton onClick={onDismiss}>
            <Close />
          </IconButton>
        </Dismiss>

        {!!children && (
          <Container
            backgroundColor={backgroundColor}
            fullscreen={fullscreen}
            timeout={MODAL_ANIMATION_TIMEOUT}
          >
            {children}
          </Container>
        )}

        {typeof renderContent === 'function' &&
          renderContent(ContentContainer, renderButtons)}

        {!!buttons.length && renderButtons()}

        {typeof renderFooter === 'function' && renderFooter()}
      </ContentView>
    </Component>
  );
};

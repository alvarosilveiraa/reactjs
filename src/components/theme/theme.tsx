import React, {useEffect, useCallback, useState} from 'react';
import {
  chakra,
  Box,
  Input,
  Heading,
  Divider,
  List,
  ListItem,
  Button,
  Switch,
  FormControl,
  FormLabel,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import {SettingsIcon} from '@chakra-ui/icons';
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';
import {ThemeType, ThemeMousePositionType, ThemeRenderModalType} from './theme.type';
import {ThemeComponent} from '~/theme';

export const Theme = ({isOpen, onOpen, onClose, components = [], children}: ThemeType) => {
  const {
    isOpen: isOpenModalElement,
    onOpen: onOpenModalElement,
    onClose: onCloseModalElement,
  } = useDisclosure();
  const {
    isOpen: isOpenModalComponent,
    onOpen: onOpenModalComponent,
    onClose: onCloseModalComponent,
  } = useDisclosure();
  const {
    isOpen: isOpenModalSettings,
    onOpen: onOpenModalSettings,
    onClose: onCloseModalSettings,
  } = useDisclosure();
  const [filterComponentsValue, setFilterComponentsValue] = useState('');
  const [activeComponent, setActiveComponent] = useState<ThemeComponent | null>(null);
  const [mousePosition, setMousePosition] = useState<ThemeMousePositionType>(null);
  const [activeElement, setActiveElement] = useState<Element | null>(null);
  const [eventsEnabled, setEventsEnabled] = useState(false);

  const filterComponents = ({name}: ThemeComponent) => {
    const pattern = new RegExp(filterComponentsValue, 'i');

    return pattern.test(name);
  };

  const onToggleExpansion = () => {
    () => (isOpen ? onClose?.() : onOpen?.());

    if (isOpen) {
      onCloseModalSettings?.();

      onClose?.();
    } else {
      onOpen?.();
    }
  };

  const onClearElements = useCallback(() => {
    const elements = document.querySelectorAll('.theme-border');

    elements.forEach(({classList}) => classList.remove('theme-border'));
  }, []);

  const onElementClick = useCallback((e: any) => {
    if (e.ctrlKey) {
      e.stopPropagation();

      onOpenModalElement();
    }
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      setMousePosition({x: e.clientX, y: e.clientY, ctrlKey: e.ctrlKey});
    },
    [onClearElements],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Control' && mousePosition) {
        const element = document.elementFromPoint(mousePosition?.x, mousePosition?.y);

        setActiveElement(element);
      }
    },
    [mousePosition],
  );

  const onKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Control') {
        onClearElements();

        setActiveElement(null);
      }
    },
    [onClearElements],
  );

  useEffect(() => {
    if (isOpenModalElement) {
      setEventsEnabled(false);
    }
  }, [isOpenModalElement]);

  useEffect(() => {
    if (activeComponent) {
      onOpenModalComponent();
    } else {
      onCloseModalComponent();
    }
  }, [activeComponent]);

  useEffect(() => {
    if (!eventsEnabled) {
      onClearElements();
    }
  }, [eventsEnabled, onClearElements]);

  useEffect(() => {
    if (isOpen && eventsEnabled) {
      setTimeout(() => {
        window.addEventListener('mousemove', onMouseMove);
      }, 400);

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    }
  }, [isOpen, eventsEnabled, onMouseMove]);

  useEffect(() => {
    if (isOpen && eventsEnabled) {
      window.addEventListener('keydown', onKeyDown);

      return () => {
        window.removeEventListener('keydown', onKeyDown);
      };
    }
  }, [isOpen, eventsEnabled, onKeyDown]);

  useEffect(() => {
    if (isOpen && eventsEnabled) {
      window.addEventListener('keyup', onKeyUp);

      return () => {
        window.removeEventListener('keyup', onKeyUp);
      };
    }
  }, [isOpen, eventsEnabled, onKeyUp]);

  useEffect(() => {
    onClearElements();

    activeElement?.classList.add('theme-border');

    activeElement?.addEventListener('click', onElementClick);

    return () => {
      activeElement?.removeEventListener('click', onElementClick);
    };
  }, [activeElement, onClearElements, onElementClick]);

  const renderComponent = (component: ThemeComponent) => (
    <ListItem key={`component-${component.name}`}>
      <Button
        width="100%"
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
        borderRadius={0}
        onClick={() => setActiveComponent(component)}
        loadingText={component.name}
      >
        {component.name}
      </Button>
    </ListItem>
  );

  const renderComponents = () => (
    <List>{components.filter(filterComponents).map(renderComponent)}</List>
  );

  const renderModalElement = () => <>{activeElement?.outerHTML}</>;

  const renderSettings = () => (
    <FormControl display="flex" alignItems="center">
      <Switch
        id="mousemove-event"
        marginRight={2}
        isChecked={eventsEnabled}
        onChange={() => setEventsEnabled(!eventsEnabled)}
      />

      <FormLabel cursor="pointer" htmlFor="mousemove-event" mb="0">
        {eventsEnabled ? 'Desabilitar eventos' : 'Habilitar eventos'}
      </FormLabel>
    </FormControl>
  );

  const renderModal = (
    {title, isOpen, onClose}: ThemeRenderModalType,
    render?: () => JSX.Element,
  ) => (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>{title}</ModalHeader>

        <ModalCloseButton />

        <ModalBody>{render?.()}</ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  );

  return (
    <chakra.div display="flex" flexDirection="row">
      <chakra.div flex={1}>{children}</chakra.div>

      <chakra.div
        overflow="hidden"
        position="relative"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        width={isOpen ? '400px' : '24px'}
        backgroundColor="white"
        boxShadow="0 0 4px rgba(0, 0, 0, 0.4)"
        transition="width 200ms"
        zIndex={1}
      >
        <chakra.button
          cursor="pointer"
          display="flex"
          alignItems="center"
          width="24px"
          margin={0}
          padding={0}
          border="none"
          outline="none"
          backgroundColor="white"
          transition="background-color 200ms"
          _hover={{backgroundColor: 'teal.50'}}
          onClick={onToggleExpansion}
        >
          {isOpen ? <ChevronRightIcon width="24px" /> : <ChevronLeftIcon width="24px" />}
        </chakra.button>

        <Box flex={1}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            paddingY={4}
          >
            <Heading as="h3" size="lg">
              Theme
            </Heading>

            <IconButton
              position="absolute"
              top={4}
              right={0}
              size="sm"
              aria-label="Settings"
              icon={<SettingsIcon />}
              onClick={() => onOpenModalSettings()}
            />
          </Box>

          <Divider marginBottom={4} />

          <Input
            width="100%"
            marginBottom={4}
            border="1px solid"
            borderColor="gray.200"
            backgroundColor="white"
            placeholder="Filtrar componentes"
            value={filterComponentsValue}
            onChange={e => setFilterComponentsValue(e.target.value)}
          />

          <Box overflow="auto" height="calc(100vh - 165px)">
            {renderComponents()}
          </Box>
        </Box>

        <chakra.div width="24px" />
      </chakra.div>

      {renderModal(
        {
          title: activeElement?.nodeName || 'Element',
          isOpen: isOpenModalElement,
          onClose: () => {
            setActiveElement(null);

            setEventsEnabled(true);

            onCloseModalElement();
          },
        },
        renderModalElement,
      )}

      {renderModal({
        title: activeComponent?.name || 'Component',
        isOpen: isOpenModalComponent,
        onClose: () => setActiveComponent(null),
      })}

      {renderModal(
        {
          title: 'Settings',
          isOpen: isOpenModalSettings,
          onClose: onCloseModalSettings,
        },
        renderSettings,
      )}
    </chakra.div>
  );
};

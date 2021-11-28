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
} from '@chakra-ui/react';
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';
import {useModalContext} from '~/contexts';
import {ThemeType, ThemeMousePositionType} from './theme.type';
import {ThemeComponent} from '~/theme';

export const Theme = ({
  isOpen,
  onOpen,
  onClose,
  components = [],
  children,
}: ThemeType) => {
  const {onOpen: modalOnOpen, onClose: modalOnClose} = useModalContext();
  const [filterComponentsValue, setFilterComponentsValue] = useState('');
  const [mousePosition, setMousePosition] =
    useState<ThemeMousePositionType>(null);
  const [activeElement, setActiveElement] = useState<Element | null>(null);

  const filterComponents = ({name}: ThemeComponent) => {
    const pattern = new RegExp(filterComponentsValue, 'i');

    return pattern.test(name);
  };

  const onToggleExpansion = () => {
    () => (isOpen ? onClose?.() : onOpen?.());

    if (isOpen) {
      modalOnClose?.();

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

      modalOnOpen?.({title: 'Componente', body: e.target.outerHTML});
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
        const element = document.elementFromPoint(
          mousePosition?.x,
          mousePosition?.y,
        );

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
    if (isOpen) {
      setTimeout(() => {
        window.addEventListener('mousemove', onMouseMove);
      }, 200);

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    }
  }, [isOpen, onMouseMove]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);

      return () => {
        window.removeEventListener('keydown', onKeyDown);
      };
    }
  }, [isOpen, onKeyDown]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keyup', onKeyUp);

      return () => {
        window.removeEventListener('keyup', onKeyUp);
      };
    }
  }, [isOpen, onKeyUp]);

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
        onClick={() =>
          modalOnOpen?.({title: component.name, body: 'Exemplo/Edição/Copiar'})
        }
        loadingText={component.name}
      >
        {component.name}
      </Button>
    </ListItem>
  );

  const renderComponents = () => (
    <List>{components.filter(filterComponents).map(renderComponent)}</List>
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
          transitionDelay="200ms"
          transition={{backgroundColor: 'inherit'}}
          _hover={{backgroundColor: 'teal.50'}}
          onClick={onToggleExpansion}
        >
          {isOpen ? (
            <ChevronRightIcon width="24px" />
          ) : (
            <ChevronLeftIcon width="24px" />
          )}
        </chakra.button>

        <Box flex={1}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            paddingY={4}
          >
            <Heading as="h3" size="lg">
              Theme
            </Heading>
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
    </chakra.div>
  );
};

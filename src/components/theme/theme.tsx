import React, {useState} from 'react';
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
import {ThemeType} from './theme.type';
import {ThemeComponent} from '~/theme';

export const Theme = ({
  isOpen,
  onOpen,
  onClose,
  components = [],
  children,
}: ThemeType) => {
  const [filterComponentsValue, setFilterComponentsValue] = useState('');

  const filterComponents = ({name}: ThemeComponent) => {
    const pattern = new RegExp(filterComponentsValue, 'i');

    return pattern.test(name);
  };

  const renderComponent = ({name}: ThemeComponent) => (
    <ListItem key={`component-${name}`}>
      <Button
        width="100%"
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
        borderRadius={0}
        onClick={() => alert('click')}
        loadingText={name}
      >
        {name}
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
          onClick={() => (isOpen ? onClose?.() : onOpen?.())}
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

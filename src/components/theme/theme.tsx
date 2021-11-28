import React from 'react';
import {Box, TextField, Typography} from '@material-ui/core';
import {ChevronLeft, ChevronRight} from '@material-ui/icons';
import {ThemeType} from './theme.type';
import {Container, Flex, Content, ExpandArea} from './styles';

export const Theme = ({visible, setVisible, children}: ThemeType) => (
  <Container>
    <Flex>{children}</Flex>

    <Content visible={visible}>
      <ExpandArea onClick={() => setVisible?.(!visible)}>
        {visible ? <ChevronRight /> : <ChevronLeft />}
      </ExpandArea>

      <Box flex={1}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingY={2}
        >
          <Typography variant="h3" color="secondary">
            Theme
          </Typography>
        </Box>

        <Box>
          <TextField
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              border: '1px solid #1a1a1a',
            }}
            placeholder="Procurar componente"
          />
        </Box>
      </Box>
    </Content>
  </Container>
);

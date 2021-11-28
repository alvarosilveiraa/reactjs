import React from 'react';
import {Box, Typography} from '@material-ui/core';
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
          <Typography variant="h3" color="primary">
            Theme
          </Typography>
        </Box>
      </Box>
    </Content>
  </Container>
);

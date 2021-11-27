import React, {Fragment} from 'react';
import {ThemeProvider} from '@material-ui/core';
import {RouterProvider} from '~/contexts';
import {theme} from '~/theme';

const App = (): JSX.Element => (
  <Fragment>
    <ThemeProvider theme={theme}>
      <RouterProvider />
    </ThemeProvider>
  </Fragment>
);

export default App;

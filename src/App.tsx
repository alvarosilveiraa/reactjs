import React, {Fragment} from 'react';
import {RouterProvider, ThemeProvider} from '~/contexts';

const App = (): JSX.Element => (
  <Fragment>
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  </Fragment>
);

export default App;

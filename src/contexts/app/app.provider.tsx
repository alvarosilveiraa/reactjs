import React from 'react';
import {Header, Fullscreen, Body} from '~/components';
import {useHeaderContext} from '..';
import {AppContext} from './app.context';
import {AppProviderType} from './app.type';

export const AppProvider = ({links, children}: AppProviderType) => {
  const {height} = useHeaderContext();

  return (
    <AppContext.Provider value={{}}>
      <Fullscreen>
        <Header links={links} height={height} />

        <Body>{children}</Body>
      </Fullscreen>
    </AppContext.Provider>
  );
};

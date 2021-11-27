import React from 'react';
import {Header, Fullscreen, Body} from '~/components';
import {useHeaderContext} from '../';
import {AppContext} from './app.context';
import {AppProviderType} from './app.type';

export const AppProvider = ({headerLinks, children}: AppProviderType) => {
  const {height: headerHeight} = useHeaderContext();

  return (
    <AppContext.Provider value={{}}>
      <Fullscreen>
        <Header links={headerLinks} height={headerHeight} />

        <Body>{children}</Body>
      </Fullscreen>
    </AppContext.Provider>
  );
};

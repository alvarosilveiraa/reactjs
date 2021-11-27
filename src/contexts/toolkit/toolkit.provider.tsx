import React from 'react';
import {Fullscreen, Body, Toolkit} from '~/components';
import {ToolkitContext} from './toolkit.context';
import {ToolkitProviderType} from './toolkit.type';

export const ToolkitProvider = ({children}: ToolkitProviderType) => {
  return (
    <ToolkitContext.Provider value={{}}>
      <Fullscreen style={{flexDirection: 'row'}}>
        <Body>{children}</Body>

        <Toolkit />
      </Fullscreen>
    </ToolkitContext.Provider>
  );
};

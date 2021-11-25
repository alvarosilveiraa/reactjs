import React, {useState} from 'react';
import {HeaderContext} from './header.context';
import {HeaderProviderType} from './header.type';
import {HEADER_CONTEXT_INITIAL_STATE} from './header.constants';

export const HeaderProvider = ({children}: HeaderProviderType) => {
  const [height, setHeight] = useState(HEADER_CONTEXT_INITIAL_STATE.height);

  return (
    <HeaderContext.Provider
      value={{
        height,
        setHeight,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

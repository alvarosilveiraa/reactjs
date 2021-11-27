import React, {useState} from 'react';
import {Modal} from '~/components';
import {ModalContext} from './modal.context';
import {ModalProviderType} from './modal.type';

export const ModalProvider = ({children}: ModalProviderType) => {
  const [visible, setVisible] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {children}

      <Modal visible={visible} onDismiss={() => setVisible(false)} />
    </ModalContext.Provider>
  );
};

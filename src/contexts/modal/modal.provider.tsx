import React, {useEffect, useState} from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react';
import {ModalContext} from './modal.context';
import {ModalDataType, ModalProviderType} from './modal.type';

export const ModalProvider = ({children}: ModalProviderType) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [data, setData] = useState<ModalDataType | null>(null);

  useEffect(() => {
    if (data) {
      onOpen();
    } else {
      onClose();
    }
  }, [data]);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        onOpen: setData,
        onClose: () => setData(null),
      }}
    >
      {children}

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>{data?.title}</ModalHeader>

          <ModalCloseButton />

          <ModalBody>{data?.body}</ModalBody>
        </ModalContent>
      </Modal>
    </ModalContext.Provider>
  );
};

import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import {ModalContext} from './modal.context';
import {ModalProviderType} from './modal.type';
import {useNavigate} from 'react-router';

export const ModalProvider = ({children}: ModalProviderType) => {
  const navigate = useNavigate();
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
      }}
    >
      {children}

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>

          <ModalCloseButton />

          <ModalBody>Lorem...</ModalBody>

          <ModalFooter>
            <Button onClick={() => navigate('/')}>Entrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ModalContext.Provider>
  );
};

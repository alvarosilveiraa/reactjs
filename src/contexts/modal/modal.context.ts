import {createContext, useContext} from 'react';
import {MODAL_CONTEXT_INITIAL_STATE} from './modal.constants';

export const ModalContext = createContext(MODAL_CONTEXT_INITIAL_STATE);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  return context;
};

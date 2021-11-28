import React, {useState} from 'react';
import {Link} from '@material-ui/core';
import {Modal} from '~/components';
import {ModalContext} from './modal.context';
import {ModalProviderType} from './modal.type';
import {useNavigate} from 'react-router';
import {StyledComponent} from 'styled-components';

export const ModalProvider = ({children}: ModalProviderType) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const renderContent = (Container: StyledComponent<'div', any>) => (
    <Container style={{alignItems: 'center', justifyContent: 'center'}}>
      <Link
        variant="button"
        marginLeft="4px"
        marginRight="4px"
        color="secondary"
        onClick={() => navigate('/')}
        style={{cursor: 'pointer'}}
      >
        Entrar
      </Link>
    </Container>
  );

  return (
    <ModalContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {children}

      <Modal
        title="Modal Example"
        visible={visible}
        onDismiss={() => setVisible(false)}
        renderContent={renderContent}
      />
    </ModalContext.Provider>
  );
};

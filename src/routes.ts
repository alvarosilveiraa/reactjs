import {RouteType} from '~/typings';
import {Body, Fullscreen} from '~/components';
import {AppProvider} from '~/contexts';
import {
  EmptyPage,
  HomePage,
  ProfilePage,
  ProfileEditPage,
  SigninPage,
} from '~/pages';

const routes: RouteType[] = [
  // Página de login sem cabeçalho e com os componentes Body e Fullscreen como layout
  // Esta página ficará montada assim na renderização:
  // <Fullscreen>
  //   <Body><SigninPage title="Signin" /></Body>
  // </Fullscreen>
  {
    name: 'signin',
    path: '/signin',
    component: {
      Function: SigninPage,
      props: {
        title: 'Signin',
      },
    },
    Layouts: [Body, Fullscreen],
  },
  // Página de início com cabeçalho
  // Esta página ficará montada assim na renderização:
  // <AppProvider headerLinks={[...]}>
  //   <HomePage />
  // </AppProvider>
  {
    name: 'home',
    path: '/',
    Component: HomePage,
    // Rotas filhas que herdarão os layouts da home
    routes: [
      // Página de perfil (filha da home)
      // Esta página ficará montada assim na renderização:
      // <AppProvider headerLinks={[...]}>
      //   <ProfilePage />
      // </AppProvider>
      {
        name: 'profile',
        path: '/profile',
        Component: ProfilePage,
      },
      // Página de editar perfil (fila da home)
      // Esta página ficará montada assim na renderização:
      // <AppProvider headerLinks={[...]}>
      //   <ProfileEditPage />
      // </AppProvider>
      {
        name: 'profile',
        path: '/profile/edit',
        Component: ProfileEditPage,
      },
      // Página de rotas não encontradas (filha da home)
      // Esta página ficará montada assim na renderização:
      // <AppProvider headerLinks={[...]}>
      //   <EmptyPage />
      // </AppProvider>
      {
        name: 'empty',
        path: '/*',
        Component: EmptyPage,
      },
    ],
    layout: {
      // "Context" que possui um header e um conteúdo abaixo (componente da página)
      Function: AppProvider,
      props: {
        headerLinks: [
          {
            path: '/',
            label: 'Inicio',
          },
          {
            path: '/profile',
            label: 'Perfil',
          },
          {
            path: '/signin',
            label: 'Sair',
          },
        ],
      },
    },
  },
];

export default routes;

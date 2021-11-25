import {RouteType} from '~/typings';
import {Body, Fullscreen} from '~/components';
import {AppProvider, HeaderProvider} from '~/contexts';
import {
  EmptyPage,
  HomePage,
  ProfilePage,
  ProfileEditPage,
  SigninPage,
} from '~/pages';

const routes: RouteType[] = [
  // Página de login sem cabeçalho
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
  {
    name: 'home',
    path: '/',
    Component: HomePage,
    // Rotas filhas que herdarão os layouts da home
    routes: [
      // Página de perfil (filha da home)
      {
        name: 'profile',
        path: '/profile',
        Component: ProfilePage,
      },
      {
        name: 'profile',
        path: '/profile/edit',
        Component: ProfileEditPage,
      },
      // Página para rotas não encontradas (filha da home)
      {
        name: 'empty',
        path: '/*',
        Component: EmptyPage,
      },
    ],
    layouts: [
      {
        // "Context" de página que possui um header e um conteúdo abaixo (página)
        Function: AppProvider,
        props: {
          links: [
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
      {
        // "Context" do header com método e variavel para manipulação da altura
        Function: HeaderProvider,
      },
    ],
  },
];

export default routes;

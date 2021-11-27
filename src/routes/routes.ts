import {Body, Fullscreen} from '~/components';
import {AppProvider, ToolkitProvider, ModalProvider} from '~/contexts';
import {
  EmptyPage,
  HomePage,
  ProfilePage,
  ProfileEditPage,
  SigninPage,
} from '~/pages';
import {getRouteTitle} from './routes.utils';
import {RouteType} from './routes.type';

export const routes: RouteType[] = [
  {
    name: 'signin',
    path: '/signin',
    title: getRouteTitle('Signin'),
    Component: SigninPage,
    Layouts: [Body, Fullscreen, ToolkitProvider],
  },
  {
    name: 'home',
    path: '/',
    title: getRouteTitle('Home'),
    Component: HomePage,
    routes: [
      {
        name: 'profile',
        path: '/profile',
        title: getRouteTitle('Profile'),
        Component: ProfilePage,
      },
      {
        name: 'profile',
        path: '/profile/edit',
        title: getRouteTitle('Profile Edit'),
        Component: ProfileEditPage,
      },
      {
        name: 'empty',
        path: '/*',
        title: getRouteTitle('Empty'),
        Component: EmptyPage,
      },
    ],
    layouts: [
      {
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
      {
        Function: ModalProvider,
      },
    ],
  },
];

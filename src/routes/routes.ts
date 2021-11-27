import {Body, Fullscreen} from '~/components';
import {AppProvider, HeaderProvider, ModalProvider} from '~/contexts';
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
    Layouts: [Body, Fullscreen, ModalProvider],
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
        name: 'profile-edit',
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
              name: 'home',
              path: '/',
              label: 'Inicio',
            },
            {
              name: 'profile',
              path: '/profile',
              label: 'Perfil',
            },
            {
              name: 'signin',
              path: '/signin',
              label: 'Sair',
            },
          ],
        },
      },
      {
        Function: HeaderProvider,
      },
      {
        Function: ModalProvider,
      },
    ],
  },
];

import {RouteType} from '~/routes';

export type RouterType = {
  onRoute?: (route: RouteType) => void;
};

export type RouterContextType = {
  route?: RouteType | null;
};

export type RouterProviderType = {};

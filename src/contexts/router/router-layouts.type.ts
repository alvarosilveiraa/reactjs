import {RouteFCType, RouteType} from '~/routes';

export type LayoutsType = {
  route?: RouteType;
  layouts?: RouteFCType[];
  onRoute?: (route: RouteType) => void;
};

import {FC} from 'react';

export type RouteFCType = {
  Function: FC<any>;
  props?: any;
};

export type RouteType = {
  name: string;
  path: string;
  title?: string;
  component?: RouteFCType;
  Component?: FC<any>;
  layouts?: RouteFCType[];
  Layouts?: FC<any>[];
  layout?: RouteFCType;
  Layout?: FC<any>;
  routes?: RouteType[];
};

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {RouteFCType, RouteType} from '~/routes';
import {routes} from '~/routes';
import {Layouts} from './router-layouts';
import {RouterType} from './router.type';

export const Router = ({onRoute}: RouterType) => {
  const getNewLayouts = (
    {
      component,
      Component,
      layouts = [],
      Layouts = [],
      layout,
      Layout,
    }: RouteType,
    type: 'lower' | 'upper' | 'both' = 'both',
    hasComponent = true,
  ) => {
    const newLayouts: RouteFCType[] = [];

    if ((type === 'lower' || type === 'both') && component && hasComponent) {
      newLayouts.push(component);
    }

    if ((type === 'upper' || type === 'both') && Component && hasComponent) {
      newLayouts.push({
        Function: Component,
      });
    }

    if (type === 'lower' || type === 'both') {
      if (layouts.length) {
        newLayouts.push(...layouts);
      }

      if (layout) {
        newLayouts.push(layout);
      }
    }

    if (type === 'upper' || type === 'both') {
      if (Layouts.length) {
        newLayouts.push(...Layouts.map(Function => ({Function})));
      }

      if (Layout) {
        newLayouts.push({
          Function: Layout,
        });
      }
    }

    return newLayouts;
  };

  const renderRoute = (route: RouteType, prevRoute?: RouteType) => {
    const prevLayouts = prevRoute
      ? getNewLayouts(prevRoute, 'both', false)
      : [];

    const newLayouts = getNewLayouts(route);

    newLayouts.push(...prevLayouts);

    const {path, name, routes = []} = route;

    const NewRoutes: JSX.Element[] = [];

    NewRoutes.push(
      <Route
        key={`route-${name}`}
        path={path}
        element={
          <Layouts route={route} layouts={newLayouts} onRoute={onRoute} />
        }
      />,
    );

    routes.forEach(nextRoute => {
      const newRoutes = renderRoute(nextRoute, {
        ...route,
        layouts: (route.layouts || []).concat(prevLayouts),
      });

      newRoutes.forEach(NextRoute => NewRoutes.push(NextRoute));
    });

    return NewRoutes;
  };

  return (
    <BrowserRouter>
      <Routes>{routes.map(route => renderRoute(route))}</Routes>
    </BrowserRouter>
  );
};

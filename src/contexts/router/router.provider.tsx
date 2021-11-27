import React, {useState} from 'react';
import {RouterContext} from './router.context';
import {Router} from './router';
import {RouteType} from '~/routes';

export const RouterProvider = () => {
  const [route, setRoute] = useState<RouteType | null>(null);

  return (
    <RouterContext.Provider value={{route}}>
      <Router onRoute={setRoute} />
    </RouterContext.Provider>
  );
};

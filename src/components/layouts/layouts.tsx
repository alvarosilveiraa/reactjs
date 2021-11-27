import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {LayoutsType} from './layouts.type';

export const Layouts = ({route, layouts = []}: LayoutsType) => {
  const location = useLocation();

  useEffect(() => {
    if (route?.title && location) {
      document.title = route.title;
    }
  }, [route, location]);

  const Layout = layouts.reduce((prev, next) => {
    const PrevComponent = prev?.Function;

    const prevProps = prev?.props;

    const NextComponent = next?.Function;

    const nextProps = next?.props;

    const Function = () => {
      if (!PrevComponent) {
        return <NextComponent {...nextProps} />;
      }

      return (
        <NextComponent {...nextProps}>
          <PrevComponent {...prevProps} />
        </NextComponent>
      );
    };

    return {
      Function,
      props: prevProps,
    };
  });

  return <Layout.Function {...Layout.props} />;
};

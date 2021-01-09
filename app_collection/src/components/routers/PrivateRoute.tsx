

import React,{FC} from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom'

interface IProps {
  component: FC;
  path: string;
}

const PrivateRoute: FC<IProps & RouteProps> = ({component: Component, path, ...rest}) => {

  return (
    <Route {...rest} render={(props) => (
      false? <Component {...props} /> : <Redirect to='/login' />
    )}/>
  );
}

export default PrivateRoute
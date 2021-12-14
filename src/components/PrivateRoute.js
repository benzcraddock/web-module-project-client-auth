import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={(props) => {
      // if we have token, return Component and pass in props
      if (localStorage.getItem("token")) {
        return(<Component {...props}/>);
      } else {
        return <Redirect to="/login"/>
      }
    }}/>
  )
}

export default PrivateRoute;

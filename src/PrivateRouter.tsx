import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  //todo: check if user exist else navigate to landing page

  //const [user, setUser] = useState<User | any>({});
  //return user ? <Outlet /> : <Navigate to='/' />;
  return <Outlet />;
};
export default PrivateRoute;

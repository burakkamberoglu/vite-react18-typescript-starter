import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { selectLoggedInUser } from '@/redux/accessors';
import { useSelector } from 'react-redux';

interface Props {
  children?: ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const user = useSelector(selectLoggedInUser);
  const location = useLocation();

  if (!user.isUserLoggedIn) {
    return <Navigate to="/auth/login" replace state={{ return_url: location.pathname + location.search }} />;
  }
  return <>{children}</>;
};

export default PrivateRoute;

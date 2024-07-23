import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../services/auth";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;

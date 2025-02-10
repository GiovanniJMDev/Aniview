import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loading from "../../Pages/Loading/Loading";

const PrivateRoute: React.FC = () => {
  const isAuthenticated = useAuth();

  if (isAuthenticated === null) {
    return <Loading />; // Mostrar carga mientras se verifica
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;

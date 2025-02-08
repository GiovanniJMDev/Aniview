import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute: React.FC = () => {
  const isAuthenticated = useAuth();

  if (isAuthenticated === null) {
    return <div>Verificando autenticación...</div>; // Mostrar carga mientras se verifica
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;

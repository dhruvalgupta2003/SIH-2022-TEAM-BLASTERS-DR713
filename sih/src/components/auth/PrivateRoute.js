import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router";
import { useParams } from "react-router-dom";

export const PrivateRoute = ({ component: Component }) => {
  const { user } = useAuth();
  const params = useParams();

  return user ? <Component params={params} /> : <Navigate to="/login" />;
};
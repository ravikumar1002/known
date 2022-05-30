import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const RequireAuth = ({ children }) => {
  const { authToken } = useSelector((state) => state.auth);
  const location = useLocation();
  return authToken ? (
    children
  ) : (
    <Navigate to={"/login"} replace state={{ from: location }} />
  );
};

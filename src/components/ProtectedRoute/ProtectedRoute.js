import { Navigate } from "react-router-dom";
import { LoggedInContext } from "../../contexts/LoggedInContext";
import { useContext } from "react";

function ProtectedRoute({element: Component, ...props}) {
  const { loggedIn } = useContext(LoggedInContext);

  return (
    loggedIn ? <Component {...props} /> : <Navigate to="/signin" replace />
  )
}

export default ProtectedRoute;
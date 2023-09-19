import { Navigate } from "react-router-dom";
import { LoggedInContext } from "../../contexts/LoggedInContext";
import { useContext } from "react";

function ProtectedRoute({element: Component, ...props}) {
  const { loggedIn } = useContext(LoggedInContext);
  console.log(loggedIn);
  return (
    loggedIn ? <Component {...props} /> : <Navigate to="/" replace />
  )
}

export default ProtectedRoute;
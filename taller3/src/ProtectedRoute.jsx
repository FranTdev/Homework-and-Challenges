import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    alert('Por favor inicia sesion');
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
    if (!isLoggedIn) {
        alert("Please Login to Cotinue!")
        return <Navigate to="/"/>
    }
    return children;
}

export default ProtectedRoute;
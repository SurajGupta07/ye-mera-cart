import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export function PrivateRoute({ ...props }) {
    const { login } = useAuth();
    return login ? <Route {...props} /> : <Navigate replace to="/login" />;
}

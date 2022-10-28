import { Navigate } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
    if (!user) {
        return <Navigate to="/landing" replace />;
    }

    return children;
};

export default PrivateRoute
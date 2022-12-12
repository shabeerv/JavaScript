import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ authenticated, children }) => (
    <> { authenticated ? children : <Navigate replace to="/login" /> } </>
)

export default ProtectedRoute
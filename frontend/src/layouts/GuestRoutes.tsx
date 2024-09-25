import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext"

const GuestRoutes = () => {
    const {authUser} = useAuthContext();
    return !authUser ? <Outlet /> : <Navigate to="/" />
}

export default GuestRoutes;
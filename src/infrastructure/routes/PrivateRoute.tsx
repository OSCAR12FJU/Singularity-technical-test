import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../components/SectionContext"

export const PrivateRoute = () =>{
    const token = useAuth();
    return token  ? <Outlet /> : <Navigate to="/login" replace/>

}
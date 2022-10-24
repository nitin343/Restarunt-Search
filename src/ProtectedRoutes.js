import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const useAuth = () => {
    const [loggedIn , setLoggedIn] = useState(false)

    const UserInfo = useSelector((state) => state.User)
    const {users } = UserInfo;
     
    if(users.id){
        setLoggedIn(true)
    }

    const user = loggedIn;
    return user ;
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/signup" />
}

export default ProtectedRoutes;
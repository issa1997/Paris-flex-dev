import { Navigate, Outlet } from "react-router-dom";

export default function IsAdmin(): JSX.Element {

  let loginJson = localStorage.getItem("userObject");
  let loginData = loginJson ? JSON.parse(loginJson) : null;

  if(loginData && loginData.userRole && loginData.userRole === "ADMIN"){
    return (<Outlet />);
  }else{
    return (<Navigate to="/login" />);
  }
}
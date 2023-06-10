import { Navigate, Outlet } from "react-router-dom";

export default function IsAdmin(): JSX.Element {
  let loginJson = localStorage.getItem("userObject");
  let loginData = loginJson ? JSON.parse(loginJson) : null;
  if(loginData.userRole && loginData.userRole === "ADMIN"){
    return (<Outlet />);
  }
  return (<Navigate to="/" />);
}
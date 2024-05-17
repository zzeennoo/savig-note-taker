import Login from "views/Login.js";
import Register from "views/Register.js";
import ForgotPass from "views/ForgotPass.js";

var routes = [
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-button-power text-red",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    component: <Register />,
    layout: "/auth",
  },
  {
    path: "/forgotpass",
    name: "Forgot Password",
    component: <ForgotPass />,
    layout: "/auth",
  },
];
export default routes;

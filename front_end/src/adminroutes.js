import Dashboard from "views/admin/Dashboard.js";
import Setting from "views/admin/Setting.js";
import Login from "views/Login.js";
import Management from "views/admin/Management.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/management",
    name: "Management",
    icon: "ni ni-archive-2 text-info",
    component: <Management />,
    layout: "/admin",
  },
  {
    path: "/setting",
    name: "Setting",
    icon: "ni ni-settings-gear-65",
    component: <Setting />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-button-power text-red",
    component: <Login />,
    layout: "/auth",
  },
];
export default routes;

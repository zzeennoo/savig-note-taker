import Dashboard from "views/user/Dashboard.js";
import Setting from "views/user/Setting.js";
import Calendar from "views/user/Calendar.js";
import Login from "views/Login.js";
import Notes from "views/user/Notes.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Dashboard />,
    layout: "/user",
  },
  {
    path: "/notes",
    name: "Notes",
    icon: "ni ni-collection text-info",
    component: <Notes />,
    layout: "/user",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "ni ni-calendar-grid-58 text-green",
    component: <Calendar />,
    layout: "/user",
  },
  {
    path: "/setting",
    name: "Setting",
    icon: "ni ni-settings-gear-65",
    component: <Setting />,
    layout: "/user",
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

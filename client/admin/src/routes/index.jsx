import Dashboard from "layouts/Dashboard.jsx";
import LoginPage from "views/Pages2/login.jsx";

var indexRoutes = [
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/", name: "Home", component: Dashboard }
];

export default indexRoutes;

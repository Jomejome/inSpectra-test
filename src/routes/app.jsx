import Dashboard from 'views/Dashboard/Dashboard';
import TableList from 'views/History/History';
import Icons from 'views/Icons/Icons';
import Notifications from 'views/Notifications/Notifications';

const appRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard },
    { path: "/history", name: "History", icon: "pe-7s-note2", component: TableList },
    { path: "/notifications", name: "Notifications", icon: "pe-7s-bell", component: Notifications },
    { redirect: true, path:"/", to:"/dashboard", name: "Dashboard" }
];

export default appRoutes;

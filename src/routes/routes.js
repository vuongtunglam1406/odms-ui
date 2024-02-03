import Home from "../pages/Home";
import Login from "../pages/Login";
import RegisterUser from "../pages/RegisterUser";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/registeruser', component: RegisterUser },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
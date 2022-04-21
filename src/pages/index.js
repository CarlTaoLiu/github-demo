import Home from './Home'
import Detail from './Detail'
import LoginPage from './LoginPage';

const routes = [
    {
        path:"/login",
        title:"Login",
        isAuthenticated:false,
        component:LoginPage
    },
    {
        path:"/home",
        title:"Home",
        isAuthenticated:false,
        component:Home
    },
    {
        path:"/detail/:username/:name",
        title:"Detail",
        isAuthenticated:false,
        component:Detail
    }
];

export default routes
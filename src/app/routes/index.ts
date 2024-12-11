import express from 'express';
import { UserRouter } from '../modules/User/user.route';
import { AuthRouter } from '../modules/Auth/auth.route';
const router = express.Router();
interface TModulesRoutes {
    path: string;
    route: express.Router;
 }

const modulesRoutes : TModulesRoutes[] = [
    {
        path: '/auth',
        route: UserRouter
    },
    {
        path: '/auth',
        route: AuthRouter
    },
]

modulesRoutes.forEach(route => router.use(route.path , route.route) )


export default router
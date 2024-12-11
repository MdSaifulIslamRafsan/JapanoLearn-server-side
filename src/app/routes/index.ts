import express from 'express';
import { UserRouter } from '../modules/User/user.route';
const router = express.Router();
interface TModulesRoutes {
    path: string;
    route: express.Router;
 }

const modulesRoutes : TModulesRoutes[] = [
    {
        path: '/user',
        route: UserRouter
    },
]

modulesRoutes.forEach(route => router.use(route.path , route.route) )


export default router
import express from 'express';
import { UserRoute } from '../modules/User/user.route';
const router = express.Router();
interface TModulesRoutes {
    path: string;
    route: express.Router;
 }



const modulesRoutes : TModulesRoutes[] = [
    {
        path: '/user',
        route: UserRoute
    }
]

modulesRoutes.forEach(route => router.use(route.path , route.route) )


export default router
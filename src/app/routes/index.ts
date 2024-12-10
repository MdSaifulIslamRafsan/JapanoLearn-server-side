import express from 'express';
const router = express.Router();
interface TModulesRoutes {
    path: string;
    // route: express.Router;
 }



const modulesRoutes : TModulesRoutes[] = [
    {
        path: '/user',
        // route: ''
    }
]

modulesRoutes.forEach(route => router.use(route.path , route.route) )


export default router
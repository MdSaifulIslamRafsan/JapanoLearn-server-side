import express from 'express';
import { UserRouter } from '../modules/User/user.route';
import { AuthRouter } from '../modules/Auth/auth.route';
import { LessonRoutes } from '../modules/Lesson/lesson.route';
import { VocabularyRoutes } from '../modules/Vocabulary/vocabulary.route';
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
    {
        path: '/lesson',
        route: LessonRoutes
    },
    {
        path: '/vocabulary',
        route: VocabularyRoutes
    },
]

modulesRoutes.forEach(route => router.use(route.path , route.route) )


export default router
import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

// Route to login

router.post('/login', AuthController.userLogin );



export const AuthRouter = router;
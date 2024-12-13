import express from 'express';
import { AuthController } from './auth.controller';
import verifyToken from '../../middleware/VerifyToken';

const router = express.Router();

// Route to login

router.post('/login', AuthController.userLogin );
router.get('/currentUser', verifyToken , AuthController.getCurrentUser );
router.get('/logout', AuthController.userLogout );



export const AuthRouter = router;
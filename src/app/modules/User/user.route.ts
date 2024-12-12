import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import { UserValidation } from './user.validation';
import verifyAdmin from '../../middleware/VerifyAdmin';
import verifyToken from '../../middleware/VerifyToken';

const router = express.Router();

// Define routes

router.post('/register', validateRequest(UserValidation.createUserValidation) , UserController.createUser)
router.get('/user', verifyToken , verifyAdmin,   UserController.getAllUser)


export const UserRouter = router;
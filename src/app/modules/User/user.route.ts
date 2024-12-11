import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

// Define routes

router.post('/register', validateRequest(UserValidation.createUserValidation) , UserController.createUser)


export const UserRouter = router;
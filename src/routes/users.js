import express from 'express';
import { userController } from '../controllers';
const usersRouter = express.Router();


usersRouter.get('/', userController.usersPage);

export default usersRouter;

import { CreateUserController } from './controllers/user/CreateUserController';
import {Router,Response,Request} from 'express';

const router = Router();

router.post('/users',new CreateUserController().hadle)

export {router};
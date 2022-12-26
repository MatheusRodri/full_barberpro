import { CreateUserController } from './controllers/user/CreateUserController';
import {Router,Response,Request} from 'express';
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();

router.post('/users',new CreateUserController().handle)
router.post('/session',new AuthUserController().handle);


export {router};
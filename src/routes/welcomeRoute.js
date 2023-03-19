import { Route } from 'pienut';
import TestController from '../controllers/TestController.js';

Route.get('/', TestController, 'index');

export default Route.router;

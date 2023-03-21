import { Auth, Route } from 'pienut';
import UserController from '../../../controllers/UserController.js';

Route.get('/', UserController, '_index', Auth.isAuthenticated);
Route.get('/:id', UserController, '_show');
Route.delete('/:id', UserController, '_destroy');
Route.put('/:id', UserController, '_update');

export default Route.router;

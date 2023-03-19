import { Route } from 'pienut';
import authRoutes from './authRoutes.js';

// auth routes
Route.use('/auth', authRoutes);

// user routes
Route.use('/users', userRoutes);
Route.get('/users/:id', UserController, '_show');
Route.delete('/users/:id', UserController, '_destroy');

export default Route.router;

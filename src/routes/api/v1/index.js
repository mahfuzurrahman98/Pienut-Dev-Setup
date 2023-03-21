import { Route } from 'pienut';
import authRoutes from './authRoutes.js';
import userRoutes from './userRoutes.js';

// auth routes
Route.use('/auth', authRoutes);

// user routes
Route.use('/users', userRoutes);

export default Route.router;

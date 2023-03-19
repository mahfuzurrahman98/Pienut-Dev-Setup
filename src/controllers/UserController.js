import { Controller } from 'pienut';
import User from '../models/User.js';

class UserController extends Controller {
  constructor() {
    super();
    this.Model = User;
  }
}

export default new UserController();

import { Controller } from 'pienut';

class TestController extends Controller {
  constructor() {
    super();
  }

  async index(req, res) {
    res.sendFile('./src/welcome.html', { root: '.' });
  }
}

export default new TestController();

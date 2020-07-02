import express from 'express';

import CodesController from './controllers/CodesController';

const routes = express.Router();

const codesController= new CodesController();

routes.get('/codes', codesController.index);
routes.get('/codes/:id', codesController.show);

routes.post('/codes', codesController.create);

export default routes;

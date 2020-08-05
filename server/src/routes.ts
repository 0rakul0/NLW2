import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnetionsController';

const routes = express.Router();

const classeController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classeController.create);
routes.get('/classes', classeController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;
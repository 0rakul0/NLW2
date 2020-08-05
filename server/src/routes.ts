import express from 'express';
import ClassesController from './controller/ClassesController';
import ConnectionsController from './controller/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const ConnectionController = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', ConnectionController.index)
routes.post('/connections', ConnectionController.create)

export default routes;
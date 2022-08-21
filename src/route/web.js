import express from 'express';
import homeController from '../controller/homeController';

let router = express.Router();

const initRoute = (app) => {
  router.get('/', homeController.getHomePage);
  return app.use('/', router);
};
export default initRoute;

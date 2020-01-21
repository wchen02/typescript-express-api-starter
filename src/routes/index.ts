import { Application } from 'express';
import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send("You've found the RW API Server!");
});

const useRoutes = (app: Application) => {
  app.use('/', router);  
}

export { router, useRoutes };

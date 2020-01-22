import express, {
  Application,
  Request,
  Response,
  NextFunction,
} from "express";

class IndexRouter {
  private router: express.Router;

  constructor(router: express.Router) {
    this.router = router;
  }

  init() {
    this.router.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.send("You've found the RW API Server!");
    });
  }

  useBy(app: Application) {
    app.use("/", this.router);
  }
}

export default IndexRouter;

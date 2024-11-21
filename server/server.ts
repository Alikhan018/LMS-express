import express, { Application, Request, Response } from "express";
import userRoutes from "../server/routes/user.routes";

class Server {
  private app: Application;
  private readonly port: number;

  constructor(port: number = 3000) {
    this.port = port;
    this.app = express();
    this.configureMiddlewares();
    this.routes();
    this.start();
  }
  private routes(): void {
    this.app.get(`/`, this.handleRoot);
  }
  private handleRoot(req: Request, res: Response): void {
    res.json({ message: `Hello Tsc` });
  }
  private configureMiddlewares(): void {
    this.app.use(express.json());
    this.app.use("/users", userRoutes);
  }
  private start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    });
    this.routes();
  }
}

export default Server;

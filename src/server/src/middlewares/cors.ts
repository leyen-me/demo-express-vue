import { Express } from "express";
import ExpressCors from "cors";

export function cors(app: Express) {
  app.use(ExpressCors());
  return (req: any, res: any, next: any) => {
    next();
  };
}

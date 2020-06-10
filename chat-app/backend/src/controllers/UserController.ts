import { Request, Response } from "express";

import User, {UserInterface} from "../schemas/User";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const query_data = { email: String(req.query.email) };
      const user: UserInterface = await User.findOne(query_data);
      return res.json(user);
    } catch(err) {
      return res.status(400).json(err);
    }

  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.find();
      return res.json(users);
    } catch(err) {
      return res.status(400).json(err);
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.create(req.body);

      // const users = await User.find();

      // const io = req.app.get("io");

      // io.emit("users", [{ teste: "testeee" }]);

      return res.json(user);
    } catch (err) {
      return res.json(err);
    }
  }
}

export default new UserController();

import { Request, Response } from "express";

import User from "../schemas/User";

class UserController {
  public async index(req, res): Promise<Response> {
    const users = await User.find();
    return res.json(users);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      // const user = await User.create(req.body);

      const users = await User.find();

      req.socket.emit("users", [users, { teste: "testeee"}]);

      return res.json({ teste: "teste" });
    } catch (err) {
      return res.json(err);
    }
  }
}

export default new UserController();

import { Request, Response } from "express";

import User from "../schemas/User";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find();
    return res.json(users);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (err) {
      return res.json({ error: "Não foi possível cadastrar um novo usuário!" });
    }
  }
}

export default new UserController();

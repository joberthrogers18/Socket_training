import { Request, Response } from "express";

import User, { UserInterface } from "../schemas/User";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const query_data = { email: String(req.query.email) };
      const user: UserInterface = await User.findOne(query_data);

      const io = req.app.get("io");
      io.emit("login_user", user);

      return res.json(user);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.find();

      return res.json(users);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.create(req.body);

      const users = await User.find();

      // const io = req.app.get("io");
      // io.emit("add-user", users);

      return res.json(user);
    } catch (err) {
      return res.json(err);
    }
  }

  public async disconnectUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.query;
    const io = req.app.get("io");
    io.emit("disconnect-user", id);
    return res.json({ success: "Usuário desconectado!" });
  }

  public async sendMessage(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { message } = req.body;
    const io = req.app.get("io");
    io.to("room-" + id).emit("send-message", message);
    return res.status(204).json({});
  }

  public async joinRoom(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const io = req.app.get("io");
    // io.join("room-"+id);
    io.emit("join-room", id);
    return res.status(204).json({});
  }
}

export default new UserController();

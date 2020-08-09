import { Request, Response } from "express";

import User, { UserInterface } from "../schemas/User";
import Chats from "../schemas/Chats";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    console.log("passou");
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
    console.log("passou");
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
    const { senderId } = req.query;
    const { messages } = req.body;
    const io = req.app.get("io");

    console.log(id);
    const chat = await Chats.findOneAndUpdate(
      { room: id },
      { $set: { messages } },
      { new: true }
    );

    if (!chat) {
      await Chats.create({ room: id, messages });
    }

    io.to("room-" + id).emit("send-message", messages);
    io.emit("message-send-to", senderId);

    return res.status(204).json({});
  }

  public async loadMessages(req: Request, res: Response): Promise<Response> {
    console.log(req.params);
    const { room } = req.params;

    try {
      const response = await Chats.findOne({ room });
      return res.status(200).json({
        messages: response.messages,
      });
    } catch {
      return res.status(404).json({});
    }
  }

  public async joinRoom(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const io = req.app.get("io");
    io.emit("join-room", id);
    return res.status(204).json({});
  }
}

export default new UserController();

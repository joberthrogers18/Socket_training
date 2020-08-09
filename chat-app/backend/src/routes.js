import { Router } from "express";

import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/user", UserController.index);
routes.get("/users", UserController.show);
routes.post("/users", UserController.create);
routes.get("/users/disconnect", UserController.disconnectUser);
routes.post("/send-message/:id", UserController.sendMessage);
routes.get("/join-room/:id", UserController.joinRoom);
routes.get("/load-messages/:room", UserController.loadMessages);

export default routes;

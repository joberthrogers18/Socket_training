import { Router } from "express";

import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/user", UserController.index);
routes.get("/users", UserController.show);
routes.post("/users", UserController.create);
routes.get("/users/disconnect", UserController.disconnectUser);

export default routes;

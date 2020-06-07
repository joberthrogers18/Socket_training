import http from "http";
import io from "socket.io";

import app from "./app";

const httpServer = http.createServer(app.express);
const socketSetup = io(httpServer);

socketSetup.on("connection", socket => {
  console.log("Conectado");
  socket.on("connectUser", data => {
    console.log(data);
  })
});

app.express.use((req, res, next) => {
  req.io = socketSetup;
  return next();
});

const PORT = process.env.PORT || 33356;

httpServer.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

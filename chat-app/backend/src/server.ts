import http from "http";
import io from "socket.io";

import app from "./app";

const httpServer = http.createServer(app.express);
const socketSetup = io(httpServer);

app.express.set("io", socketSetup);

socketSetup.on("connection", socket => {
  console.log('User connected');
  // socket.on("sendMessage", (id, msg) => {
  //   socket.to(id).emit('myMessage', msg);
  // })
});

const PORT = process.env.PORT || 33356;

httpServer.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

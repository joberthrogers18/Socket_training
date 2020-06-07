import http from "http";
import io from "socket.io";

import app from "./app";

const httpServer = http.createServer(app.express);
const socketSetup = io(httpServer);

app.express.set("io", socketSetup);

socketSetup.on("connection", socket => {
  console.log("Conectado");
  socket.on("connectUser", data => {
    console.log(data);
  })
});

const PORT = process.env.PORT || 33356;

httpServer.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

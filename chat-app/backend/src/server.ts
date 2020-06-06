import http from "http";
import io from "socket.io";

import app from "./app";

const httpServer = http.createServer(app.express);
app.initializeSocket(io(httpServer));

const PORT = process.env.PORT || 33356;

httpServer.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

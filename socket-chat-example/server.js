const app = require("./src/");
const http = require("http").createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3333;

io.on("connection", socket => {
  console.log("User is connected!");

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

http.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});

const app = require("./src/");
const http = require("http").createServer(app);

const PORT = process.env.PORT || 3333;

http.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
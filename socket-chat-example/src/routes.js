const mainChatRoutes = require('./routes/mainChatRoutes');

// dependence injection
module.exports = (app) => {
  app.use("/test", mainChatRoutes);
};

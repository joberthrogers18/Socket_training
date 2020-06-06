import app from "./app";

const PORT = process.env.PORT || 33356;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

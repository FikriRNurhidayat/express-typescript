import server from "./server";

const { PORT = "8000" } = process.env;

server.listen(PORT, () => {
  console.clear();
  console.log(`Listening on port ${PORT}!`);
})

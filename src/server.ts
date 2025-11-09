const app = require("./app");
const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

process
  .on("uncaughtException", (err) => {
    console.error(err.message, "Uncaught Exception thrown");
    server.close();
  })
  .on("unhandledRejection", (reason) => {
    console.error(reason, "Unhandled Rejection at Promise");
  });

const main = async () => {
  await server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();

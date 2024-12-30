const express = require("express");
const cors = require("cors");
const server = express();
const { router } = require("./route/index.js");

server.use(cors({ credentials: true, origin: "*" }));
server.use(express.json());
server.use("/", router);
server.listen(8080, () => {
  console.log("server running");
});
